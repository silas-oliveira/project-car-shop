import CustomRouter from './routes/CustomRouter';
import App from './app';

import CarController from './controllers/Car.controller';
import { Car } from './models/Car.model';

const server = new App();

const carController = new CarController();

const carRouter = new CustomRouter<Car>();
carRouter.addRoute(carController);

server.addRouter(carRouter.router);

export default server;
