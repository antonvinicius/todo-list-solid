export interface TaskDeleteUseCase {
    execute(id: string): Promise<boolean>
}
