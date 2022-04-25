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


  describe('test the ("create") method', () => {
    const req = { body: carMockParams } as RequestWithBody<Car>;
    const res = { } as Response;

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(carMock);
      sinon.stub(carController.service, "create").resolves(carMock);
    });

    after(() => {
      sinon.restore();
    })

    it("test when the function created worked", async () => {
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201));
      expect((res.json as sinon.SinonStub).calledWith(carMock));
    });
  });


  describe('test the ("create") method with empty body', () => {
    const req = { body: {} } as RequestWithBody<Car>;
    const res = { } as Response;

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({ });
      sinon.stub(carController.service, "create").resolves({ } as any);
    });

    after(() => {
      sinon.restore();
    })

    it("test when the function created worked", async () => {
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(500));
      expect(res.json({ }));
    });
  });
});
