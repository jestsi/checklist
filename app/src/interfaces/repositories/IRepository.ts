import {IModel} from "../models/IModel";

export interface IRepository
{
  getAll() : Promise<IModel[]>
  getById(id: number) : Promise<IModel | null>
  add(model: IModel): Promise<void>
  update(model: IModel, id: number): Promise<void>
  delete(id: number): Promise<void>
}
