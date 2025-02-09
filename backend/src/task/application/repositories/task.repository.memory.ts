import { Task } from "@/task/domain/entities/task";
import { TaskRepository } from "@/task/domain/repositories/task.repository";
import { injectable } from "tsyringe";

@injectable()
export class TaskRepositoryInMemory implements TaskRepository {
    private tasks: Task[] = []

    async save(task: Task): Promise<void> {
        this.tasks.push(task);
    }

    async list(): Promise<Task[]> {
        return this.tasks;
    }
}