import { Task } from "../domain/entities/task";
import { TaskRepository } from "../domain/repositories/task.repository";
import { TaskListUseCase } from "../domain/usecases/task-list.usecase";

export class TaskListUseCaseImpl implements TaskListUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    public async execute(): Promise<Task[]> {
        const tasks = await this.taskRepository.list();

        return tasks;
    }
}