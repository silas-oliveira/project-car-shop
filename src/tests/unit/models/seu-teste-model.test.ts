import { expect } from "chai";
import mongoose from "mongoose";
import CarModel from "../../../models/Car.model";

mongoose.connect("mongodb://localhost:27017/CarShop");
describe("CarModel", () => {
  describe("create", () => {
    it("cria um carro e retorna os valores", async () => {
      const carModel = new CarModel();
      const create = await carModel.create({
        model: "treta",
        year: 1990,
        color: "pink",
        buyValue: 50000,
        doorsQty: 14,
        seatsQty: 0,
      });
      expect(create).to.be.property("_id");
    });
  });
});
