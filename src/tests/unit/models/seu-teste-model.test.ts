import { expect } from "chai";
import mongoose from 'mongoose';
import CarModel from '../../../models/Car.model';

mongoose.connect('mongodb://localhost:27017/CarShop')
describe("CarModel", () => {
  describe('create', () => {
    it("cria um carro e retorna os valores", async () => {
      const carModel = new CarModel();
      const create = await carModel.create({ doorsQty: 14, seatsQty: 10 })
      expect(create).to.be.equal(4);
    });
  });
});
