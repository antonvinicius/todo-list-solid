export interface TaskCreateUseCase {
    execute(name: string): Promise<string>
}
