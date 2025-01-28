import { FastifyRequest, FastifyReply } from "fastify";
import { FastifyController } from "../../../../../core/infra/api/fastify/controllers/fastify.controller";
import { TaskCreateUseCase } from "../../../../domain/usecases/task-create.usecase";

export type TaskCreateProps = {
    name: string
}

export class TaskCreateController implements FastifyController {
    constructor(private readonly taskCreateUseCase: TaskCreateUseCase) { }

    public handle: (request: FastifyRequest, reply: FastifyReply) => Promise<void> = async (request, reply) => {
        const { name } = request.body as TaskCreateProps

        const result = await this.taskCreateUseCase.execute({ name })

        reply.send(result)
    };

}