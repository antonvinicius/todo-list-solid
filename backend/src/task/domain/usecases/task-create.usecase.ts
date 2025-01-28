export type TaskCreateUseCaseInput = {
    name: string;
}

export interface TaskCreateUseCase {
    execute(input: TaskCreateUseCaseInput): Promise<string>
}
