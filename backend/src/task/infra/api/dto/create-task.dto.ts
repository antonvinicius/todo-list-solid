import { z } from 'zod'

export const CreateTaskSchema = z.object({
    name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres")
})

export type CreateTaskDto = z.infer<typeof CreateTaskSchema>