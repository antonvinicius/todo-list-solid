import { AppError } from '../../core/domain/errors/AppError';
import { TaskRepository } from '../domain/repositories/task.repository'
import { TaskDeleteUseCase, TaskDeleteUseCaseInput } from '../domain/usecases/task-delete.usecase'

export class TaskDeleteUseCaseImpl implements TaskDeleteUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    public async execute({ id }: TaskDeleteUseCaseInput): Promise<string> {
        const task = await this.taskRepository.findById(id)

        if (!task) {
            throw new AppError("Task não encontrada.")
        }

        const deletedId = await this.taskRepository.delete(id);

        return deletedId;
    }
}