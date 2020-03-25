import { ITagModel } from '../models/tags.model';
import { TagInput } from '../input/tags.input';
import { SqlTagService } from './sql/tag.service.sql';
import { Connection } from 'typeorm';

export interface ITagService {
    getAll(): Promise<ITagModel[]>;
    getById(id: string): Promise<ITagModel>;
    create(tag: TagInput): Promise<Partial<ITagModel>>;
    delete(uuid: String): Promise<Boolean> 
}

export const service = (connection: Connection) => new SqlTagService(connection);
