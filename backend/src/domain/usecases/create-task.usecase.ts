export type CreateTaskUseCaseInput = {
    name: string
}

export interface CreateTaskUseCase {
    execute(input: CreateTaskUseCaseInput): Promise<void>
}