import { IVariantModel } from '../models/variant.model';
import { VariantInput } from '../input/variant.input';
import { SqlVariantService } from './sql/variant.service.sql';
import { Connection } from 'typeorm';

export interface IVariantService {
    getAll(): Promise<IVariantModel[]>;
    getById(id: string): Promise<IVariantModel>;
    create(variant: VariantInput): Promise<Partial<IVariantModel>>;
    delete(uuid: String): Promise<Boolean> 
}

export const service = (connection: Connection) => new SqlVariantService(connection);
