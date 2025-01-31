import { Task } from "@/domain/entities/task";
import { TaskRepository } from "@/domain/repositories/task.repository";
import { CreateTaskUseCase, CreateTaskUseCaseInput } from "@/domain/usecases/create-task.usecase";

export class CreateTaskUseCaseImpl implements CreateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    async execute({ name }: CreateTaskUseCaseInput): Promise<void> {
        const task = Task.create({ name })

        await this.taskRepository.save(task)
    }
}