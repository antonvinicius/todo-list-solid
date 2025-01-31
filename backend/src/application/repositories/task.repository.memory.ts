import { Task } from "@/domain/entities/task";
import { TaskRepository } from "@/domain/repositories/task.repository";

export class TaskRepositoryInMemory implements TaskRepository {
    private tasks: Task[] = []

    async save(task: Task): Promise<void> {
        this.tasks.push(task);
    }

    async list(): Promise<Task[]> {
        return this.tasks;
    }
}