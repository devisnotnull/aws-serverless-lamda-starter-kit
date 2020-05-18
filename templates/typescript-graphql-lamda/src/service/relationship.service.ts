import { Connection } from 'typeorm';

import { IDeleteResult } from '../models/delete.model';

import { SqlRelationshipService } from './sql/relationship.service.sql';
import { IRelationshipItemModel } from '../models/relationship.model';
import { RelationshipItemInput } from '../input/relationship.input';

import { IQueryMultiple, IQuerySingular } from './query'

export interface IRelationshipService {
    getAll(options?: IQueryMultiple): Promise<IRelationshipItemModel[]>;
    getByParentType(tag: string, options?: IQueryMultiple): Promise<Array<IRelationshipItemModel>>;
    getByParentUUID(tag: string, options?: IQuerySingular): Promise<Array<IRelationshipItemModel>>;
    getByChildUUID(tag: string, options?: IQuerySingular): Promise<Array<IRelationshipItemModel>>;
    addRelationship(create: RelationshipItemInput): Promise<Partial<IRelationshipItemModel>>;
    delete(uuid: String): Promise<IDeleteResult>;
    deleteItem(uuid: String): Promise<IDeleteResult>;
}

export const service = (connection: Connection) => new SqlRelationshipService(connection);
