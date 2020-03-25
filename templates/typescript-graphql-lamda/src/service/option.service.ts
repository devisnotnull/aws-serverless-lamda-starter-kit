import { Connection } from 'typeorm';

import { SqlOptionService } from './sql/option.service.sql';
import { OptionInput } from '../input/option.input'
import { IOption } from '../models/option.model'

export interface IOptionService {
    getAll(): Promise<IOption[]>;
    getById(id: string): Promise<IOption>;
    create(create: OptionInput): Promise<Partial<IOption>> 
    delete(uuid: String): Promise<Boolean> 
}

export const service = (connection: Connection) => new SqlOptionService(connection);
