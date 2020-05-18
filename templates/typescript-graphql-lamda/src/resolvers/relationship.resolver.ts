import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { InjectConnection } from 'typeorm-typedi-extensions';
import { Connection } from 'typeorm';

import { IRelationshipItemModel } from '../models/relationship.model';
import { IDeleteResult } from '../models/delete.model';
import { RelationshipItem } from '../entities/relationship.schema';
import { DeleteResult } from '../entities/delete.schema';
import { RelationshipItemInput } from '../input/relationship.input';

import { IRelationshipService, service } from '../service/relationship.service';

@Resolver(RelationshipItem)
export class RelationshipResolver {
    private readonly service: IRelationshipService = service(this.connection);

    constructor(@InjectConnection('primary') private readonly connection: Connection) {}

    /**
     * Return all relationship items
     */
    @Query(_type => [RelationshipItem])
    async getAllRelationships(): Promise<IRelationshipItemModel[]> {
        return this.service.getAll();
    }

    /**
     * Return a singular relationship based on it tag name
     * @param tag 
     */
    @Query(_type => [RelationshipItem])
    async getGategorizationByParentType(@Arg('type') type: string): Promise<Array<IRelationshipItemModel>> {
        return this.service.getByParentType(type) ?? [];
    }

    /**
     * Return a list relationship based on their tag 
     * @param tag 
     */
    @Query(_type => [RelationshipItem])
    async getGategorizationByParentUUID(
        @Arg('uuid') uuid: string, 
    ): Promise<Array<IRelationshipItemModel>> {
        const result =  await this.service.getByParentUUID(uuid);
        return result;
    }

    /**
     * Return a list relationship based on their tag 
     * @param tag 
     */
    @Query(_type => [RelationshipItem])
    async getGategorizationByChildUUID(
        @Arg('uuid') uuid: string, 
    ): Promise<Array<IRelationshipItemModel>> {
        const result =  await this.service.getByChildUUID(uuid);
        return result;
    }

    /**
     * Create a new relationship with a generic data structure
     * @param data 
     */
    @Mutation(_type => RelationshipItem)
    async addRelationship(@Arg('data') data: RelationshipItemInput): Promise<Partial<IRelationshipItemModel>>  {
        return this.service.addRelationship(data);
    }

    /**
     * Delete a specific relationship
     * @param uuid 
     */
    @Mutation(_type => DeleteResult)
    async deleteRelationship(@Arg('uuid') uuid: string): Promise<IDeleteResult> {
        return this.service.deleteItem(uuid);
    }
}
