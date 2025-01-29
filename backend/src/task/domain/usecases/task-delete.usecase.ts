export type TaskDeleteUseCaseInput = {
    id: string;
}

export interface TaskDeleteUseCase {
    execute(input: TaskDeleteUseCaseInput): Promise<string>
}
