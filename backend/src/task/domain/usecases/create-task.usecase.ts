import { UseCase } from "@/core/domain/usecases/usecase"
import { UseCaseOutput } from "../../../core/domain/usecases/usecase.output"

export type CreateTaskUseCaseInput = {
    name: string
}

export interface CreateTaskUseCaseOutput extends UseCaseOutput { }

export interface CreateTaskUseCase extends UseCase<CreateTaskUseCaseInput, CreateTaskUseCaseOutput> { }