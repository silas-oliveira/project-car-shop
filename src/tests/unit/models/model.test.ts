import { expect } from "chai";
import Sinon from "sinon";
import { carListMock, carMock } from "../../../mocks/CarModel.mock";
import CarModel from "../../../models/Car.model";

// import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017/CarShop')

describe("Test the Model layer ('CarModel')", () => {
  const carModel = new CarModel() as any; 

  describe("test the ('Model.create') method", () => {
    before(() => {
      Sinon.stub(carModel, "create").resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });

    it("When creating a car with all fields correct, the following values are returned:", async () => {
      const create = await carModel.create(carMock);
      expect(create).to.be.equal(carMock);
    });
  });


  describe("test the ('Model.read') method", () => {
    before(() => {
      Sinon.stub(carModel.model, "find").resolves(carListMock);
    });

    after(() => {
      Sinon.restore();
    });

    it("the search will be return these value", async () => {
      const readFile = await carModel.read();
      expect(readFile).to.be.equal(carListMock);
    });
  });


  describe("test the ('Model.readOne') method", () => {
    before(() => {
      Sinon.stub(carModel.model, "findOne").resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });

    it("return archive read", async () => {
      const readFile = await carModel.readOne(carMock._id);
      expect(readFile).to.be.equal(carMock);
    });
  });


  describe("test the ('Model.update') method", () => {
    before(() => {
      Sinon.stub(carModel.model, "findByIdAndUpdate").resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });

    it("update and return new info", async () => {
      const carUpdate = await carModel.update(carMock._id, carMock);
      expect(carUpdate).to.be.equal(carMock);
    });
  });


  describe("test the ('Model.delete') method", () => {
    before(() => {
      Sinon.stub(carModel.model, "findByIdAndDelete").resolves('it worked out');
    });

    after(() => {
      Sinon.restore();
    });

    it("delete and return ('it worked out')", async () => {
      const carDelete = await carModel.delete("1");
      expect(carDelete).to.be.equal('it worked out');
    });
  });
});
