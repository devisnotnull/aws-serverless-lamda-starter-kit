import { Connection } from 'typeorm';

import { ITagModel } from '../../models/tags.model';
import { Tag } from '../../entities/tags.schema';

import { TagInput } from '../../input/tags.input';
import { ITagService } from '../tags.service';

export class SqlTagService implements ITagService {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    /**
     * 
     */
    public async getAll(): Promise<ITagModel[]> {
        const saved = await this.connection.getRepository(Tag).find();
        return saved;
    }

    /**
     * 
     * @param id 
     */
    public async getById(uuid: string): Promise<ITagModel> {
        const saved = await this.connection.getRepository(Tag).findOne({ uuid });
        return saved;
    }

    /**
     * 
     * @param tag 
     */
    public async create(tag: TagInput): Promise<Partial<ITagModel>> {
        // Save our new tag
        await this.connection.getRepository(Tag).save(tag);
        return tag;
    }

    public async delete(uuid: string): Promise<Boolean> {
        const saved = await this.connection.getRepository(Tag).delete({ uuid });
        return saved.affected == 1;
    }
}
