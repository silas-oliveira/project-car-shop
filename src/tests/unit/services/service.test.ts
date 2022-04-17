import { expect } from "chai";
import Sinon from "sinon";
import {carMock, invalidCarMock} from "../../../mocks/CarModel.mock";
import CarModel from "../../../models/Car.model";
import CarService from "../../../services/Car.service";

describe("CarModel", () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  describe("create", () => {

    before(() => {
      Sinon.stub(carModel, 'create').resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });
    
    it("Ao criar um carro, são retornados os seguintes valores:", async () => {
      const create = await carService.create(carMock);
      expect(create).to.be.equal(carMock);
    });
  });

  describe("testa 'service.create' passando algum parametro invalido ou incorreto", () => {

    // before(() => {
    //   Sinon.stub(carModel, 'create').resolves(carMock);
    // });

    // after(() => {
    //   Sinon.restore();
    // });
    
    it("Ao criar um carro, são retornados os seguintes valores:", async () => {
      const create = await carService.create(invalidCarMock);
      expect(create).to.have.property('error');
    });
  });
});
