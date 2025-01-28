import { TaskRepository } from '../domain/repositories/task.repository'
import { TaskDeleteUseCase } from '../domain/usecases/task-delete.usecase'

export class TaskDeleteUseCaseImpl implements TaskDeleteUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    public async execute(id: string): Promise<boolean> {
        const deletedId = await this.taskRepository.delete(id);

        return deletedId;
    }
}