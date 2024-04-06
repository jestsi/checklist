import {IModel} from "../interfaces/models/IModel";

export class Checklist implements IModel{
  private readonly _id: number;
  private _name: string;
  private _description: string;
  private _created_at: string;
  private _updated_at: string;
  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
    this._created_at = (new Date).toDateString();
    this._updated_at = this._created_at;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get created_at(): string {
    return this._created_at;
  }

  get updated_at(): string {
    return this._updated_at;
  }

  set name(value: string) {
    this._name = value;
  }

  set description(value: string) {
    this._description = value;
  }

  set created_at(value: string) {
    this._created_at = value;
  }

  set updated_at(value: string) {
    this._updated_at = value;
  }
}
