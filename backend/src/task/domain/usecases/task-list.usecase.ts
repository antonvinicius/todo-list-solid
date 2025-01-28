import { Task } from "../entities/task";

export interface TaskListUseCase {
    execute(): Promise<Task[]>
}
