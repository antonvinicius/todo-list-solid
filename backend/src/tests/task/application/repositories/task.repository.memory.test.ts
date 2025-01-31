import { Task } from "@/task/domain/entities/task";
import { expect, test } from "vitest";
import { TaskRepositoryInMemory } from "@/task/application/repositories/task.repository.memory";

test('should save new task', async () => {
    const task = Task.create({ name: 'new task' })
    const repository = new TaskRepositoryInMemory()

    await repository.save(task)
    const tasks = await repository.list()

    expect(tasks).toContain(task)
})