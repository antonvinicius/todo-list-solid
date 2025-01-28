import { TaskRepository } from '../domain/repositories/task.repository'
import { TaskDeleteUseCase, TaskDeleteUseCaseInput } from '../domain/usecases/task-delete.usecase'

export class TaskDeleteUseCaseImpl implements TaskDeleteUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    public async execute(input: TaskDeleteUseCaseInput): Promise<boolean> {
        const deletedId = await this.taskRepository.delete(input.id);

        return deletedId;
    }
}