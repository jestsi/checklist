import {IModel} from "../interfaces/models/IModel";

export class ChecklistItem implements IModel{
  private readonly _id: number;
  private _checklist_id: number;
  private _title: string;
  private _description: string;
  private _completed: boolean;
  private _created_at: string;
  private _updated_at: string;

  constructor(checklist_id: number ) {
    this._checklist_id = checklist_id;
  }

  get checklist_id(): number {
    return this._checklist_id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get completed(): boolean {
    return this._completed;
  }

  get created_at(): string {
    return this._created_at;
  }

  get updated_at(): string {
    return this._updated_at;
  }

  get id(): number {
    return this._id;
  }

  // Сеттеры
  set title(title: string) {
    this._title = title;
  }

  set description(description: string) {
    this._description = description;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }

  set created_at(created_at: string) {
    this._created_at = created_at;
  }

  set updated_at(updated_at: string) {
    this._updated_at = updated_at;
  }
}
