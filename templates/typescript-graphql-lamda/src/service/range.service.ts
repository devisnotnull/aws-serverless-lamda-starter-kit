import { Connection } from 'typeorm';

import { IRangeModel } from '../models/range.model';
import { RangeInput } from '../input/range.input';
import { SqlRangeService } from './sql/range.service.sql';
import { IDeleteResult } from '../models/delete.model';

export interface IRangeService {
    getAll(): Promise<IRangeModel[]>;
    getById(id: string): Promise<IRangeModel>;
    create(product: RangeInput): Promise<Partial<IRangeModel>>;
    delete(uuid: String): Promise<IDeleteResult> 
}

export const service = (connection: Connection) => new SqlRangeService(connection);
