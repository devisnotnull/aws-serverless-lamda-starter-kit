import { Resolver, Query, Arg, Mutation, ResolverInterface, Root, FieldResolver } from 'type-graphql';
import { InjectConnection } from 'typeorm-typedi-extensions';
import { Connection } from 'typeorm';

import { IOption } from '../models/option.model';
import { Option as OptionSchema } from '../entities/option.schema';
import { OptionInput } from '../input/option.input';
import { IOptionService, service } from '../service/option.service';

@Resolver(of => OptionSchema)
export class OptionResolver {
    private readonly service: IOptionService = service(this.connection);

    constructor(@InjectConnection('primary') private readonly connection: Connection) {}

    @Query(_type => [OptionSchema])
    async getAllOptions(): Promise<IOption[]> {
        return this.service.getAll();
    }

    @Query(_type => OptionSchema)
    async getOptionById(@Arg('id') id: string): Promise<IOption> {
        return this.service.getById(id);
    }

    @Mutation(_type => OptionSchema)
    async addOption(@Arg('data') data: OptionInput): Promise<Partial<IOption>> {
        return this.service.create(data);
    }

    @Mutation(_type => OptionSchema)
    async deleteOption(@Arg('data') uuid: string): Promise<Boolean> {
        return this.service.delete(uuid);
    }

}
