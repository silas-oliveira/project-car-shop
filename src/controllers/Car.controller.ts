// src/Controllers/Frame.ts

import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } 
  from './Generic.controller';
import CarService from '../services/Car.service';
import { Car } from '../interfaces/CarInterface';

class CarController extends Controller<Car> {
  private _route: string;

  constructor(public service = new CarService(), route = '/cars') {
    super(service);
    this._route = route;
  }

  get route() {
    return this._route;
  }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
    try {
      const car = await this.service.create(body);
      if (!car) {
        return res.status(500).json({ error: this.errors.internal });
      }
      if ('error' in car) {
        return res.status(400).json({ error: car.error.issues[0].message });
      }
      return res.status(201).json(car);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      const car = await this.service.readOne(id);
      return car
        ? res.json(car)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      if (Object.keys(error as unknown as any).includes('reason')) {
        return res.status(400).json({ error: this.errors.invalidId });
      }
      
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default CarController;
