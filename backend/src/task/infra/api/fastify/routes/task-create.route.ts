import { Route } from "../../../../../core/infra/api/fastify/routes/route";
import { TaskCreateController } from "../controllers/task-create.controller";
import { FastifyController } from "../../../../../core/infra/api/fastify/controllers/fastify.controller";

export class TaskCreateRoute implements Route {
    constructor(private readonly taskCreateController: TaskCreateController) { }

    method: "delete" | "get" | "patch" | "post" | "put" = "post"
    path: string = "/task";
    controller: FastifyController = this.taskCreateController;
}