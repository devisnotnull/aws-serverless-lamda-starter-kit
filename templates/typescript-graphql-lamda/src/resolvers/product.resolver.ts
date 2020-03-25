import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { InjectConnection } from 'typeorm-typedi-extensions';

import { IProductModel } from '../models/product.model';
import { Product as ProductSchema } from '../entities/product.schema';
import { ProductInput } from '../input/product.input';

import { IProductService, service } from '../service/product.service';
import { IRelationshipService, service as catService } from '../service/relationship.service';
import { Connection } from 'typeorm';

@Resolver(ProductSchema)
export class ProductResolver {
    private readonly service: IProductService = service(this.connection);
    private readonly relationship: IProductService = service(this.connection);

    constructor(@InjectConnection('primary') private readonly connection: Connection) {}

    @Query(_type => [ProductSchema])
    async getAllProducts(): Promise<IProductModel[]> {
        return this.service.getAll();
    }

    @Query(_type => ProductSchema)
    async getProductById(@Arg('uuid') uuid: string): Promise<IProductModel> {
        return this.service.getById(uuid);
    }

    @Mutation(_type => ProductSchema)
    async addProduct(@Arg('data') data: ProductInput): Promise<Partial<IProductModel>> {
        return this.service.create(data);
    }

    @Mutation(_type => ProductSchema)
    async deleteProduct(@Arg('uuid') uuid: string): Promise<Boolean> {
        return this.service.delete(uuid);
    }
}
