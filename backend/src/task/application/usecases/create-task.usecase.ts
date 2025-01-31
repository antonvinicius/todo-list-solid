import { Task } from "@/task/domain/entities/task";
import { TaskRepository } from "@/task/domain/repositories/task.repository";
import { CreateTaskUseCase, CreateTaskUseCaseInput, CreateTaskUseCaseOutput } from "@/task/domain/usecases/create-task.usecase";
import { StatusCode } from "../../../core/application/constants/api.constants";
import { getErrorOutput } from "../../../core/application/usecases/utils/get-error-output";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateTaskUseCaseImpl implements CreateTaskUseCase {
    constructor(@inject("TaskRepositoryInMemory") private readonly taskRepository: TaskRepository) { }

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