import { FastifyController } from "../../../../../core/infra/api/fastify/controllers/fastify.controller";
import { Route } from "../../../../../core/infra/api/fastify/routes/route";
import { TaskListController } from "../controllers/task-list.controller";

export class TaskListRoute implements Route {
    constructor(private readonly taskListController: TaskListController) { }

    method: "delete" | "get" | "patch" | "post" | "put" = "get";
    path: string = "/task";
    controller: FastifyController = this.taskListController;

}