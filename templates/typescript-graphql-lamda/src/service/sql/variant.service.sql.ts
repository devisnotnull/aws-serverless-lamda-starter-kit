import { Connection } from 'typeorm';

import { IVariantModel } from '../../models/variant.model';
import { Variant } from '../../entities/variant.schema';
import { Product } from '../../entities/product.schema';

import { VariantInput } from '../../input/variant.input';
import { IVariantService } from '../variant.service';

export class SqlVariantService implements IVariantService {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    /**
     * 
     */
    public async getAll(): Promise<IVariantModel[]> {
        const saved = await this.connection.getRepository(Variant).find();
        return saved;
    }

    /**
     * 
     * @param id 
     */
    public async getById(uuid: string): Promise<IVariantModel> {
        const saved = await this.connection.getRepository(Variant).findOne({ uuid });
        return saved;
    }

    /**
     * 
     * @param variant 
     */
    public async create(variant: VariantInput): Promise<Partial<IVariantModel>> {
        
        // Create new variant object with parent object
        const finalVariant: Variant = {
            ...variant,
        };

        // Save our new variant
        await this.connection.getRepository(Variant).save(finalVariant);

        return variant;
    }

    public async delete(uuid: string): Promise<Boolean> {
        const saved = await this.connection.getRepository(Variant).delete({ uuid });
        return saved.affected == 1;
    }
}
