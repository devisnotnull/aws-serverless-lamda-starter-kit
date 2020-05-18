import { Connection } from 'typeorm';

import { IProductModel } from '../../models/product.model';
import { Product } from '../../entities/product.schema';
import { ProductInput } from '../../input/product.input';

import { IProductService } from '../product.service';

export class SqlProductService implements IProductService {
    private connection: Connection;

    /**
     * Injected connection
     * @param connection 
     */
    constructor(connection: Connection) {
        this.connection = connection;
    }

    /**
     * 
     */
    public async getAll(): Promise<IProductModel[]> {
        const saved = await this.connection.getRepository(Product).find();
        return saved;
    }

    /**
     * 
     * @param id 
     */
    public async getById(uuid: string): Promise<IProductModel> {
        const saved = await this.connection.getRepository(Product).findOne({ uuid });
        return saved;
    }

    /**
     * 
     * @param product 
     */
    public async create(product: ProductInput): Promise<Partial<IProductModel>> {
        const productParsed: IProductModel = product as IProductModel;
        await this.connection.getRepository(Product).save(productParsed);
        return product;
    }

    public async delete(uuid: string): Promise<Boolean> {
        const saved = await this.connection.getRepository(Product).delete({ uuid });
        return saved.affected == 1;
    }

    /**
     * Everytime an entry is updated save to elasticsearch
     */
    private async generateCache() {
    }
}
