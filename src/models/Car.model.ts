import { Schema, model as createModel, Document } from 'mongoose';
import MongoModel from './Mongo.model';
import { Car } from '../interfaces/CarInterface';

interface CarDocument extends Car, Document { }

export const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}

export default CarModel;
