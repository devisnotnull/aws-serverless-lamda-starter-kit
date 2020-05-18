import { Connection } from 'typeorm';

import { IOptionGroup } from '../../models/option-group.model';

import { OptionGroup } from '../../entities/option-group.schema';
import { OptionGroupInput } from '../../input/optiongroup.input';
import { IOptionGroupService } from '../option-group.service';

export class SqlOptionGroupService implements IOptionGroupService {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    public async getAll(): Promise<IOptionGroup[]> {
        const saved = await this.connection.getRepository(OptionGroup).find();
        return saved;
    }

    public async getById(uuid: string): Promise<IOptionGroup> {
        const saved = await this.connection.getRepository(OptionGroup).findOne({ uuid });
        return saved;
    }

    public async create(option: OptionGroupInput): Promise<Partial<IOptionGroup>> {
        await this.connection.getRepository(OptionGroup).save(option);
        return option;
    }

    public async delete(uuid: string): Promise<Boolean> {
        const saved = await this.connection.getRepository(OptionGroup).delete({ uuid });
        return saved.affected == 1;
    }
}
