import Service, { ServiceError } from './Generic.service';
import CarModel from '../models/Car.model';
import CarSchema from '../schemas/Car';
import { Car } from '../interfaces/CarInterface';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    const result = await this.model.create(obj);
    console.log('result', result);
    return result;
  };
}

export default CarService;