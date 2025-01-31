import { UseCase } from "./usecase"
import { UseCaseOutput } from "./usecase.output"

export type CreateTaskUseCaseInput = {
    name: string
}

export interface CreateTaskUseCaseOutput extends UseCaseOutput { }

export interface CreateTaskUseCase extends UseCase<CreateTaskUseCaseInput, CreateTaskUseCaseOutput> { }