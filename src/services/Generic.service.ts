import { ZodError } from 'zod';
import Model from '../models/Mongo.model';

export interface ServiceError {
  error: ZodError;
}
abstract class Service<T> {
  constructor(public model: Model<T>) {}

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }

  async update(_id: string, obj: T): Promise<T | null> {
    return this.model.update(_id, obj);
  }

  async delete(_id: string): Promise<T | null> {
    return this.model.delete(_id);
  }
}

export default Service;
