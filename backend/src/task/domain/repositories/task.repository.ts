import { Task } from "@/task/domain/entities/task";

export interface TaskRepository {
    save(task: Task): Promise<void>
    list(): Promise<Task[]>
}