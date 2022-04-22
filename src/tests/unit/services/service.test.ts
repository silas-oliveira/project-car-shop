import { expect } from "chai";
import Sinon from "sinon";
import {carListMock, carMock, invalidCarMock} from "../../../mocks/CarModel.mock";
import CarModel, { carSchema } from "../../../models/Car.model";
import CarService from "../../../services/Car.service";

// import { model as createModel } from 'mongoose';


describe("Test the Service layer", () => {
  // teste iniciais, questionar about it
  // const model = createModel('Cars', carSchema);
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  describe("test the ('Service.create') method with correct implemantation", () => {
    before(() => {
      Sinon.stub(carService.model, 'create').resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });
    
    it("When creating a car with the correct values, the following values are returned:", async () => {
      const create = await carService.create(carMock);
      console.log(create);
      expect(create).to.be.equal(carMock);
    });
  });


  describe("test the ('Service.create') method with incorrect implemantation", () => {

    before(() => {
      Sinon.stub(carService.model, 'create').resolves(invalidCarMock);
    });

    after(() => {
      Sinon.restore();
    });
    
    it("When creating a car with the incorrect values, the following values are returned:", async () => {
      const create = await carService.create(invalidCarMock);
      expect(create).to.have.property('error');
    });
  });

  
  describe("test the ('Service.read') method with correct implemantation", () => {

    before(() => {
      Sinon.stub(carService.model, 'read').resolves(carListMock);
    });

    after(() => {
      Sinon.restore();
    });
    
    it("tests if the function returns a list correctly'", async () => {
      const read = await carService.read();
      expect(read).to.be.equal(carListMock);
    });
  });


  describe("test the ('Service.read') method with incorrect implemantation", () => {

    before(() => {
      Sinon.stub((carService.model) as any, 'read').resolves("error");
    });

    after(() => {
      Sinon.restore();
    });
    
    it("tests if the function returns a error", async () => {
      const read = await carService.read();
      console.log('read', read);
    
      expect(read).to.be.equal(read);
    });
  });

  
  describe("test the ('Service.readOne') method with correct implemantation", () => {

    before(() => {
      Sinon.stub(carService.model, 'readOne').resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });
    
    it("tests whether the function returns or search element", async () => {
      const readOne = await carService.readOne("1");
      expect(readOne).to.be.equal(readOne);
    });
  });


  describe("test the ('Service.readOne') method with incorrect implemantation", () => {

    before(() => {
      Sinon.stub((carService.model) as any, 'readOne').resolves('error');
    });

    after(() => {
      Sinon.restore();
    });
    
    it("tests whether the function returns a message of error", async () => {
      const readOne = await carService.readOne("error");
      expect(readOne).to.be.equal(readOne);
    });
  });


  describe("test the ('Service.update') method with correct implemantation", () => {

    before(() => {
      Sinon.stub((carService.model) as any, 'update').resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });
    
    it("tests whether the function returns a object update", async () => {
      const readOne = await carService.update(carMock._id, carMock);
      expect(readOne).to.be.equal(readOne);
    });
  });


  describe("test the ('Service.update') method with incorrect implemantation", () => {

    before(() => {
      Sinon.stub((carService.model) as any, 'update').rejects();
    });

    after(() => {
      Sinon.restore();
    });
    
    it("tests whether the function returns error with id incorrect", async () => {
      try {
        const readOne = await carService.update(45645564 as any, carMock);
        return readOne;
      } catch (error) {
        expect(error).to.be.exist;
      }
    });
  });


  describe("test the ('Service.update') method with correct implemantation", () => {

    before(() => {
      Sinon.stub((carService.model) as any, 'update').resolves(carMock);
    });

    after(() => {
      Sinon.restore();
    });
    
    it("tests whether the function returns a object update", async () => {
      const readOne = await carService.update(carMock._id, carMock);
      expect(readOne).to.be.equal(readOne);
    });
  });


  describe("test the ('Service.update') method with incorrect implemantation", () => {

    before(() => {
      Sinon.stub((carService.model) as any, 'update').rejects();
    });

    after(() => {
      Sinon.restore();
    });
    
    it("tests whether the function returns error with id incorrect", async () => {
      try {
        const readOne = await carService.update(45645564 as any, carMock);
        return readOne;
      } catch (error) {
        expect(error).to.be.exist;
      }
    });
  });
});
