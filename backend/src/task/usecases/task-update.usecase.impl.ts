import { Task } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task.repository";
import { TaskUpdateUseCase } from "../domain/usecases/task-update.usecase";

export class TaskUpdateUseCaseImpl implements TaskUpdateUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    public async execute(task: Task): Promise<string> {
        const updatedId = await this.taskRepository.update(task);

        return updatedId;
    }
}