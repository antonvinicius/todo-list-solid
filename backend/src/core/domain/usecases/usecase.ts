import { UseCaseOutput } from "./usecase.output";

export interface UseCase<Input, Output extends UseCaseOutput> {
    execute(input: Input): Promise<Output>
}