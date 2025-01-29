import { FastifyRequest, FastifyReply } from "fastify";
import { FastifyController } from "../../../../../core/infra/api/fastify/controllers/fastify.controller";
import { TaskCreateUseCase } from "../../../../domain/usecases/task-create.usecase";
import { CreateTaskDto, CreateTaskSchema } from "../../dto/create-task.dto";

export class TaskCreateController implements FastifyController {
    constructor(private readonly taskCreateUseCase: TaskCreateUseCase) { }

    public handle = async (request: FastifyRequest, reply: FastifyReply) => {
        const validation = CreateTaskSchema.safeParse(request.body);

        if (!validation.success) {
            reply.status(400).send({ errors: validation.error.errors })
            return;
        }

        const { name } = validation.data as CreateTaskDto

        const result = await this.taskCreateUseCase.execute({ name })

        reply.send(result)
    };

}