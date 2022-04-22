import * as sinon from "sinon";
import { expect } from "chai";
import { carMock, carMockParams } from "../../../mocks/CarModel.mock";
import { Car } from "../../../interfaces/CarInterface";
import {
  RequestWithBody,
} from "../../../controllers/Generic.controller";
import { Response } from "express";
import CarController from "../../../controllers/Car.controller";


describe('Test the "Controller" layer', () => {
  const carController = new CarController();
  beforeEach(sinon.restore);
  describe('test the ("create") method', () => {
    const req = { body: carMockParams } as RequestWithBody<Car>;
    const res = {} as Response;

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      sinon.stub(carController.service, "create").resolves(carMock);
    });

    it("test when the function created worked", async () => {
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201));
    });
  });
});
