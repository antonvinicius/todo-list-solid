import { Task } from "../entities/task";

export interface TaskUpdateUseCase {
    execute(task: Task): Promise<string>
}
