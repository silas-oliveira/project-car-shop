export interface Modell<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(_id: string): Promise<T | null>,
  update(_id: string, obj: T): Promise<T | null>,
  delete(_id: string): Promise<T | null>,
}

export const carMock = {
  _id: '1',
  model: 'string',
  year: 1990,
  color: 'string',
  buyValue: 50000,
  doorsQty: 4,
  seatsQty: 4,
};

export const carMockParams = {
  model: 'string',
  year: 1990,
  color: 'string',
  buyValue: 50000,
  doorsQty: 4,
  seatsQty: 4,
};

export const invalidCarMock = {
  model: 'maverick',
  year: 1990,
  color: 'pink',
  buyValue: 50000,
  doorsQty: 6,
  seatsQty: 0,
};

export const carListMock = [
  {
    _id: 1,
    model: 'string',
    year: 1990,
    color: 'string',
    buyValue: 50000,
    doorsQty: 4,
    seatsQty: 4,
  },
];
