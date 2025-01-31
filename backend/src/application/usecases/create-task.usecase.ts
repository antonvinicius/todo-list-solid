import { Task } from "@/domain/entities/task";
import { ValidationError } from "@/domain/errors/validation.error";
import { TaskRepository } from "@/domain/repositories/task.repository";
import { CreateTaskUseCase, CreateTaskUseCaseInput, CreateTaskUseCaseOutput } from "@/domain/usecases/create-task.usecase";
import { StatusCode } from "../constants/api.constants";

export class CreateTaskUseCaseImpl implements CreateTaskUseCase {
    constructor(private readonly taskRepository: TaskRepository) { }

    async execute({ name }: CreateTaskUseCaseInput): Promise<CreateTaskUseCaseOutput> {
        try {
            const task = Task.create({ name })

            await this.taskRepository.save(task)

            const output: CreateTaskUseCaseOutput = { status: StatusCode.CREATED }

            return output
        } catch (error) {
            if (error instanceof ValidationError) {
                const output: CreateTaskUseCaseOutput = {
                    status: StatusCode.BAD_REQUEST,
                    error: error.message
                }
                return output
            }

            const output: CreateTaskUseCaseOutput = {
                status: StatusCode.INTERNAL_SERVER_ERROR,
                error: 'Erro interno'
            }
            return output
        }
    }
}