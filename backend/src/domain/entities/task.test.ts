import { expect, test } from 'vitest'
import { Task } from '@/domain/entities/task'

test('should create task correctly', () => {
    const task = Task.create({ name: 'New task' })

    expect(task.taskProps.name).toBe('New task')
})

test('concluded should be false when creating new task', () => {
    const task = Task.create({ name: 'New task' })

    expect(task.taskProps.concluded).toBe(false)
})