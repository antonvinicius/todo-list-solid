import { FastifyRequest, FastifyReply } from "fastify";
import { FastifyController } from "../../../../../core/infra/api/fastify/controllers/fastify.controller";
import { TaskDeleteUseCase } from "../../../../domain/usecases/task-delete.usecase";
import { DeleteTaskDto, deleteTaskSchema } from "../../dto/delete-task.dto";
import { AppError } from "../../../../../core/domain/errors/AppError";

export class TaskDeleteController implements FastifyController {
    constructor(private readonly taskDeleteUseCase: TaskDeleteUseCase) { }

    handle = async (request: FastifyRequest, reply: FastifyReply) => {
        const validation = deleteTaskSchema.safeParse(request.body);

        if (!validation.success) {
            reply.status(400).send({ errors: validation.error.errors });
            return;
        }

        const { id } = validation.data as DeleteTaskDto

        try {
            const deleted = await this.taskDeleteUseCase.execute({ id })

            reply.send(deleted);
        } catch (err) {
            if (err instanceof AppError) {
                reply.send({ errors: err.message })
                return
            }

            reply.send({ errors: 'Internal server error' })
        }
    }
}