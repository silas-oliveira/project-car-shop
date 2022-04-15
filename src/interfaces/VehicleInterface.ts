import { z } from 'zod';

const VehicleInterface = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type Vehicle = z.infer<typeof VehicleInterface>;

export default VehicleInterface;
export { Vehicle };