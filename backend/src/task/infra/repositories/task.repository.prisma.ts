import { PrismaClient } from "@prisma/client";
import { Task } from "../../domain/entities/task";
import { TaskRepository } from "../../domain/repositories/task.repository";

export class TaskRepositoryPrisma implements TaskRepository {
    constructor(private readonly prismaClient: PrismaClient) { }

    public async create({ id, name, concluded, createdAt, updatedAt }: Task): Promise<string> {
        const createdTask = await this.prismaClient.task.create({
            data: {
                id,
                name,
                concluded,
                createdAt,
                updatedAt
            }
        });

        return createdTask.id;
    }

    public async list(): Promise<Task[]> {
        const tasks = await this.prismaClient.task.findMany();

        return tasks.map(({ concluded, createdAt, id, name, updatedAt }) => {
            return Task.with({
                concluded,
                createdAt,
                id,
                name,
                updatedAt
            });
        });
    }

    public async update({ concluded, createdAt, name, updatedAt, id }: Task): Promise<string> {
        const updatedTask = await this.prismaClient.task.update({
            where: {
                id
            },
            data: {
                concluded,
                createdAt,
                name,
                updatedAt
            }
        })

        return updatedTask.id;
    }

    public async delete(taskId: string): Promise<boolean> {
        const deleted = await this.prismaClient.task.delete({
            where: {
                id: taskId
            }
        })

        return !!deleted
    }
}