import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { InjectConnection } from 'typeorm-typedi-extensions';
import { Connection } from 'typeorm';

import { RangeInput } from '../input/range.input';
import { IRangeModel } from '../models/range.model';
import { IDeleteResult } from '../models/delete.model';
import { Range } from '../entities/range.schema';
import { DeleteResult } from '../entities/delete.schema';

import { IRangeService, service } from '../service/range.service';

@Resolver(Range)
export class RangeResolver {
    private readonly service: IRangeService = service(this.connection);

    constructor(@InjectConnection('primary') private readonly connection: Connection) {}

    /**
     * Return all relationship items
     */
    @Query(_type => [Range])
    async getAllRanges(): Promise<IRangeModel[]> {
        return this.service.getAll();
    }

    /**
     * Create a new relationship with a generic data structure
     * @param data 
     */
    @Mutation(_type => Range)
    async addRange(@Arg('data') data: RangeInput): Promise<Partial<IRangeModel>>  {
        return this.service.create(data);
    }

    /**
     * 
     * @param uuid 
     */
    @Query(_type => Range)
    async getRangeById(@Arg('uuid') uuid: string): Promise<IRangeModel> {
        return this.service.getById(uuid);
    }

    /**
     * Delete a specific relationship
     * @param uuid 
     */
    @Mutation(_type => DeleteResult)
    async deleteRange(@Arg('uuid') uuid: string): Promise<IDeleteResult> {
        return this.service.delete(uuid);
    }
}
