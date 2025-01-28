import { Task } from "../entities/task";

export type TaskUpdateUseCaseInput = {
    task: Task
}

export interface TaskUpdateUseCase {
    execute(input: TaskUpdateUseCaseInput): Promise<string>
}
