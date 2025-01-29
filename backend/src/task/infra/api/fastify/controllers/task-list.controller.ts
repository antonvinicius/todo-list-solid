import { FastifyRequest, FastifyReply } from 'fastify';
import { FastifyController } from '../../../../../core/infra/api/fastify/controllers/fastify.controller'
import { TaskListUseCase } from '../../../../domain/usecases/task-list.usecase';
export class TaskListController implements FastifyController {
    constructor(private readonly taskListUseCase: TaskListUseCase) { }

    public handle = async (request: FastifyRequest, reply: FastifyReply) => {
        const tasks = await this.taskListUseCase.execute();

        reply.send(tasks);
    }
}