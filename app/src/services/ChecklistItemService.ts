import ChecklistItemsRepository from "../repositories/ChecklistItemsRepository";
import {ChecklistItem} from "../models/ChecklistItem";
import {IChecklistItemsValidator} from "../interfaces/validators/IChecklistItemsValidator";
import {DefaultChecklistItemsValidator} from "./validators/DefaultChecklistItemsValidator";
import {useErrorStore} from '../stores/errorStore'

export default class ChecklistItemService {
  private checklistItemRepo: ChecklistItemsRepository;
  private checklistItemsValidator: IChecklistItemsValidator;
  constructor(checkListItemsValidator: IChecklistItemsValidator = new DefaultChecklistItemsValidator())
  {
    this.checklistItemRepo = new ChecklistItemsRepository();
    this.checklistItemsValidator = checkListItemsValidator;
  }

  async getAllByChecklistId(id: number) : Promise<ChecklistItem[] | null> {
    const errorStore = useErrorStore();

    try {
      this.checklistItemsValidator.validateId(id);
    } catch (e) {
      errorStore.setError(e.message);
    }
    return await this.checklistItemRepo.getAllByChecklistId(id);
  }
}
