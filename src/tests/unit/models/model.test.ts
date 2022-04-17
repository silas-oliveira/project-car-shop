import { expect } from "chai";
import Sinon from "sinon";
import { carMock, invalidCarMock } from "../../../mocks/CarModel.mock";
import CarModel, { carSchema } from "../../../models/Car.model";

import { model as createModel } from "mongoose";

describe("CarModel", () => {
  const model = createModel('Cars', carSchema);
  const carModel = new CarModel(model);

  describe("create", () => {
    before(() => {
      Sinon.stub(model, "create").resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });

    it("Ao criar um carro, são retornados os seguintes valores:", async () => {
      const create = await carModel.create(carMock);
      expect(create).to.be.equal(carMock);
    });
  });

  describe("read", () => {
    before(() => {
      Sinon.stub(model, "findOne").resolves(null);
    });

    after(() => {
      Sinon.restore();
    });

    it("Ao criar um carro, são retornados os seguintes valores:", async () => {
      const create = await carModel.readOne("1");
      expect(create).to.be.null;
    });
  });
});
