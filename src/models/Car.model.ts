import { Schema, model as createModel, Document } from 'mongoose';
import { Vehicle } from '../interfaces/VehicleInterface';
import MongoModel from './Mongo.model';

export interface Car extends Vehicle {
  doorsQty: number;
  seatsQty: number;
}

interface CarDocument extends Car, Document { }

const carSchema = new Schema<CarDocument>({
  doorsQty: Number,
  seatsQty: Number,
});

class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}

export default CarModel;
