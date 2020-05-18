import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Connection } from 'typeorm';
import { InjectConnection } from 'typeorm-typedi-extensions';

import { IVariantModel } from '../models/variant.model';
import { Variant as VariantSchema } from '../entities/variant.schema';
import { VariantInput } from '../input/variant.input';
import { IVariantService, service } from '../service/variant.service';

@Resolver(VariantSchema)
export class VariantResolver {
    private readonly service: IVariantService = service(this.connection);

    constructor(@InjectConnection('primary') private readonly connection: Connection) {}

    @Query(_type => [VariantSchema])
    async getAllVariants(): Promise<IVariantModel[]> {
        return this.service.getAll();
    }

    @Query(_type => VariantSchema)
    async getVariantById(@Arg('uuid') id: string): Promise<IVariantModel> {
        return this.service.getById(id);
    }

    @Mutation(_type => VariantSchema)
    async addVariant(@Arg('data') data: VariantInput): Promise<Partial<VariantSchema>> {
        return this.service.create(data);
    }

    @Mutation(_type => VariantSchema)
    async deleteVariant(@Arg('data') uuid: string): Promise<Boolean> {
        return this.service.delete(uuid);
    }
}
