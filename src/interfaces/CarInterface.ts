import { z } from 'zod';
import CarSchema from '../schemas/Car';

type Car = z.infer<typeof CarSchema>;

export default CarSchema;
export { Car };