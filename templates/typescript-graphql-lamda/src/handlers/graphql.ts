import 'graphql-import-node';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-lambda';
import { Container } from 'typedi';
import { useContainer as useContainerTypeOrm, createConnection, getConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Callback, APIGatewayEvent } from 'aws-lambda';

import { Range } from '../entities/range.schema';
import { Tag } from '../entities/tags.schema';
import { Product } from '../entities/product.schema';
import { OptionGroup } from '../entities/option-group.schema';
import { Option } from '../entities/option.schema';
import { RelationshipItem } from '../entities/relationship.schema';
import { Variant } from '../entities/variant.schema';

import { RangeResolver } from '../resolvers/range.resolver';
import { TagResolver } from '../resolvers/tags.resolver';
import { ProductResolver } from '../resolvers/product.resolver';
import { VariantResolver } from '../resolvers/variant.resolver';
import { OptionGroupResolver } from '../resolvers/optiongroup.resolver';
import { OptionResolver } from '../resolvers/option.resolver';
import { RelationshipResolver  } from '../resolvers/relationship.resolver';

useContainerTypeOrm(Container);

const getSchema = async () => {
    try {
        return await buildSchema({
            emitSchemaFile: './schema.gql',
            container: Container,
            resolvers: [ProductResolver, VariantResolver, OptionGroupResolver, RelationshipResolver, OptionResolver, RangeResolver, TagResolver],
            nullableByDefault: false,
        });
    } catch (e) {
        console.log('Error at get Schema');
        console.log(`Error occured while boostrapping: , ${JSON.stringify(e, null, 2)}`);
        throw e;
    } finally {
        console.log('Finish get Schema');
    }
};

const createHandler = async () => {

    try {
        getConnection('primary');
    } catch (err) {
        const typeOrmConfig: PostgresConnectionOptions = {
            name: 'primary',
            type: 'postgres',
            host: process.env.DB_HOST,
            port: 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            synchronize: true,
            logging: true,
            entities: [Variant, Product, Option, OptionGroup, RelationshipItem, Range, Tag],
            cache: {
                type: 'database',
                tableName: 'configurable-table-query-result-cache',
            },
        };
        await createConnection(typeOrmConfig);
        console.error(err);
    }

    (global as any).schema = (global as any).schema || (await getSchema());
    const schema = (global as any).schema;

    const server = new ApolloServer({
        schema,
        context: async ({ context }: { event: APIGatewayEvent; context: any }) => {
            context.callbackWaitsForEmptyEventLoop = false;
            return { auth: { isAuthenticated: false } };
        },
        formatError: error => {
            console.log('We have an error');
            console.log(error);
            console.log(JSON.stringify(error, undefined, 2));
            return error;
        },
        formatResponse: response => {
            console.log('We have an format response');
            console.log(response);
            console.log(JSON.stringify(response, undefined, 2));
            return response;
        },
    });
    return server.createHandler({ cors: { origin: process.env.CORS_ORIGIN } });
};

export const handler = (event: APIGatewayEvent, context: any, callback: Callback) => {
    createHandler().then(handler => handler(event, context, callback));
};
