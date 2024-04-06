import {ChecklistItem} from "../models/ChecklistItem";
import {api} from "../boot/axios"
import {IRepository} from "../interfaces/repositories/IRepository";
import {IModel} from "../interfaces/models/IModel";

export default class ChecklistItemsRepository implements IRepository
{
  private static readonly REPO_PATH = '/checklist-items';
  async getAllByChecklistId(id: number) : Promise<ChecklistItem[] | null>
  {
    return (await api.get(`/checklists/${id}/items`)).data;
  }

  async add(checklistItem: ChecklistItem): Promise<void> {
    await api.post(ChecklistItemsRepository.REPO_PATH, checklistItem);
  }

  // Обновление существующего чеклиста
  async update(checklistItem: ChecklistItem, id: number): Promise<void> {
    await api.patch(`${ChecklistItemsRepository.REPO_PATH}/${id}`, checklistItem);
  }

  // Удаление чеклиста по идентификатору
  async delete(id: number): Promise<void> {
    await api.delete(`${ChecklistItemsRepository.REPO_PATH}/${id}`);
  }

  async getAll(): Promise<IModel[]> {
    return (await api.get(ChecklistItemsRepository.REPO_PATH)).data;
  }

  async getById(id: number): Promise<IModel | null> {
    return(await api.get(`${ChecklistItemsRepository.REPO_PATH}/${id}`)).data;
  }
}
