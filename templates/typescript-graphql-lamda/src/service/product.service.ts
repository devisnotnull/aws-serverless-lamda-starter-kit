import { IProductModel } from '../models/product.model';
import { ProductInput } from '../input/product.input';
import { SqlProductService } from './sql/product.service.sql';
import { Connection } from 'typeorm';

export interface IProductService {
    getAll(): Promise<IProductModel[]>;
    getById(id: string): Promise<IProductModel>;
    create(product: ProductInput): Promise<Partial<IProductModel>>;
    delete(uuid: String): Promise<Boolean> 
}

export const service = (connection: Connection) => new SqlProductService(connection);
