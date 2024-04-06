import {Checklist} from "../models/Checklist";
import {api} from "../boot/axios"
import {IRepository} from "../interfaces/repositories/IRepository";
export default class ChecklistRepository implements IRepository
{
  private static readonly REPO_PATH = '/checklists';

  async getAll() : Promise<Checklist[]>
  {
    return (await api.get(ChecklistRepository.REPO_PATH)).data;
  }

  async getById(id: number) : Promise<Checklist | null>
  {
    return (await api.get((`${ChecklistRepository.REPO_PATH}/${id}`))).data;
  }

  async add(checklist: Checklist): Promise<void> {
    await api.post(ChecklistRepository.REPO_PATH, checklist);
  }

  // Обновление существующего чеклиста
  async update(checklist: Checklist, id: number): Promise<void> {
    await api.put(`${ChecklistRepository.REPO_PATH}/${id}`, checklist);
  }

  // Удаление чеклиста по идентификатору
  async delete(id: number): Promise<void> {
    await api.delete(`${ChecklistRepository.REPO_PATH}/${id}`);
  }
}
