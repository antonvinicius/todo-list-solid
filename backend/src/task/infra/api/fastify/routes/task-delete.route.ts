import { FastifyController } from "../../../../../core/infra/api/fastify/controllers/fastify.controller";
import { Route } from "../../../../../core/infra/api/fastify/routes/route";
import { TaskDeleteController } from "../controllers/task-delete.controller";

export class TaskDeleteRoute implements Route {
    constructor(private readonly taskDeleteController: TaskDeleteController) { }

    method: "delete" | "get" | "patch" | "post" | "put" = "delete";
    path: string = "/task";
    controller: FastifyController = this.taskDeleteController;
}