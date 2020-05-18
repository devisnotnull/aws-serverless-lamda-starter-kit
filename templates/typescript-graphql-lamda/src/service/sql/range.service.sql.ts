import { Connection } from 'typeorm';

import { IRangeModel } from '../../models/range.model';
import { Range } from '../../entities/range.schema';
import { RangeInput } from '../../input/range.input';
import { IDeleteResult } from '../../models/delete.model';

import { IRangeService } from '../range.service';

export class SqlRangeService implements IRangeService {
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
    public async getAll(): Promise<IRangeModel[]> {
        const saved = await this.connection.getRepository(Range).find();
        return saved;
    }

    /**
     * 
     * @param id 
     */
    public async getById(uuid: string): Promise<IRangeModel> {
        const saved = await this.connection.getRepository(Range).findOne({ uuid });
        return saved;
    }

    /**
     * 
     * @param range 
     */
    public async create(range: RangeInput): Promise<Partial<IRangeModel>> {
        const rangeParsed: IRangeModel = range as IRangeModel;
        await this.connection.getRepository(Range).save(rangeParsed);
        return range;
    }

    /**
     * 
     * @param uuid 
     */
    public async delete(uuid: string): Promise<IDeleteResult> {
        const saved = await this.connection.getRepository(Range).delete({ uuid });
        return {
            sucess: saved.affected == 1,
            affected: saved.affected
        }
    }
}
