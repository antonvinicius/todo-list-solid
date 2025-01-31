import { Task } from "@/domain/entities/task";
import { TaskRepository } from "@/domain/repositories/task.repository";
import { CreateTaskUseCase, CreateTaskUseCaseInput, CreateTaskUseCaseOutput } from "@/domain/usecases/create-task.usecase";
import { StatusCode } from "../constants/api.constants";
import { getErrorOutput } from "./utils/get-error-output";

export class CreateTaskUseCaseImpl implements CreateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    async execute({ name }: CreateTaskUseCaseInput): Promise<CreateTaskUseCaseOutput> {
        try {
            const task = Task.create({ name })

            await this.taskRepository.save(task)

            return { status: StatusCode.CREATED }
        } catch (error) {
            return getErrorOutput(error)
        }
    }
}