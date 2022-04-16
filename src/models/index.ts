interface Model<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(id: string): Promise<T | null>,
}

export default Model;