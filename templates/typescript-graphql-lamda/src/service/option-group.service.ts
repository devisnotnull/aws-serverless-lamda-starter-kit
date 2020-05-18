import { Connection } from 'typeorm';

import { SqlOptionGroupService } from './sql/option-group.service.sql';
import { OptionGroupInput } from '../input/optiongroup.input'
import { IOptionGroup } from '../models/option-group.model'

export interface IOptionGroupService {
    getAll(): Promise<IOptionGroup[]>;
    getById(id: string): Promise<IOptionGroup>;
    create(create: OptionGroupInput): Promise<Partial<IOptionGroup>> 
    delete(uuid: String): Promise<Boolean> 
}

export const service = (connection: Connection) => new SqlOptionGroupService(connection);
