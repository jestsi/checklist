import {IChecklistItemsValidator} from "../../interfaces/validators/IChecklistItemsValidator";

export class DefaultChecklistItemsValidator implements IChecklistItemsValidator{
  validateId(id: number): void
  {
    if (id === null || typeof id !== typeof Number)
      throw new TypeError('Value can`t be null or not number')
    if (id <= 0)
      throw new TypeError('Value can`t be null or small of 1')
  }
}
