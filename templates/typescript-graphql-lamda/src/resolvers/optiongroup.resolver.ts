import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { InjectConnection } from 'typeorm-typedi-extensions';
import { Connection } from 'typeorm';

import { IOptionGroup } from '../models/option-group.model';
import { OptionGroup } from '../entities/option-group.schema';
import { OptionGroupInput } from '../input/optiongroup.input';
import { IOptionGroupService, service } from '../service/option-group.service';

@Resolver(OptionGroup)
export class OptionGroupResolver {
    private readonly service: IOptionGroupService = service(this.connection);

    constructor(@InjectConnection('primary') private readonly connection: Connection) {}

    @Query(_type => [OptionGroup])
    async getAllOptionGroups(): Promise<IOptionGroup[]> {
        return this.service.getAll();
    }

    @Query(_type => OptionGroup)
    async getOptionGroupById(@Arg('id') id: string): Promise<IOptionGroup> {
        return this.service.getById(id);
    }

    @Mutation(_type => OptionGroup)
    async addOptionGroup(@Arg('data') data: OptionGroupInput): Promise<Partial<IOptionGroup>> {
        return this.service.create(data);
    }
    
    @Mutation(_type => OptionGroup)
    async deleteOptionGroup(@Arg('data') uuid: string): Promise<Boolean> {
        return this.service.delete(uuid);
    }
}
