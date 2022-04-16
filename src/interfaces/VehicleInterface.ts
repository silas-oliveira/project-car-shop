import { z } from 'zod';
import VehicleSchema from '../schemas/Vehicle';

type Vehicle = z.infer<typeof VehicleSchema>;

export default VehicleSchema;
export { Vehicle };