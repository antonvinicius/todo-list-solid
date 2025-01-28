import { Task } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task.repository";
import { TaskCreateUseCase, TaskCreateUseCaseInput } from "../domain/usecases/task-create.usecase";

export class TaskCreateUseCaseImpl implements TaskCreateUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    public async execute(input: TaskCreateUseCaseInput): Promise<string> {
        const task = Task.create(input.name);

        const createdId = await this.taskRepository.create(task);

        return createdId;
    }
}
