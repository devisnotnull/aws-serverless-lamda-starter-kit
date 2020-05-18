import { Connection } from 'typeorm';

import { IOption } from '../../models/option.model';

import { Option } from '../../entities/option.schema';
import { OptionInput } from '../../input/option.input';
import { IOptionService } from '../option.service';

export class SqlOptionService implements IOptionService {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    public async getAll(): Promise<IOption[]> {
        const saved = await this.connection.getRepository(Option).find();
        return saved;
    }

    public async getById(uuid: string): Promise<IOption> {
        const saved = await this.connection.getRepository(Option).findOne({ uuid });
        return saved;
    }

    public async create(option: OptionInput): Promise<Partial<IOption>> {
        const finalOption: IOption = option as IOption;
        await this.connection.getRepository(Option).save(finalOption);
        return option;
    }

    public async delete(uuid: string): Promise<Boolean> {
        const saved = await this.connection.getRepository(Option).delete({ uuid });
        return saved.affected == 1;
    }
}
