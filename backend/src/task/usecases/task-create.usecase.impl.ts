import { Task } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task.repository";
import { TaskCreateUseCase } from "../domain/usecases/task-create.usecase";

export class TaskCreateUseCaseImpl implements TaskCreateUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    public async execute(name: string): Promise<string> {
        const task = Task.create(name);

        const createdId = await this.taskRepository.create(task);

        return createdId;
    }
}
