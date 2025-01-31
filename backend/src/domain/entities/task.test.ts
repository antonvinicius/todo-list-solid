import { expect, test } from 'vitest'
import { Task } from '@/domain/entities/task'
import { ValidationError } from '../errors/validation.error'

test('should create task correctly', () => {
    const task = Task.create({ name: 'New task' })

    expect(task.taskProps.name).toBe('New task')
})

test('concluded should be false when creating new task', () => {
    const task = Task.create({ name: 'New task' })

    expect(task.taskProps.concluded).toBe(false)
})

test('should throw error when name is empty', () => {
    expect(() => Task.create({ name: '' })).toThrow(new ValidationError('Nome não ser vazio'))
})