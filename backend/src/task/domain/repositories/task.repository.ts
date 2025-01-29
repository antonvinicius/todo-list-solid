import { Task } from "../entities/task";

export interface TaskRepository {
    create(task: Task): Promise<string>
    list(): Promise<Task[]>
    update(task: Task): Promise<string>
    delete(taskId: string): Promise<string>
    findById(taskId: string): Promise<Task | null>
}
