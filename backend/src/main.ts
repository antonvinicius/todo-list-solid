import { FastifyApi } from "./core/infra/api/fastify/fastify.api"
import { prisma } from "./core/infra/package/prisma/prisma"
import { TaskCreateController } from "./task/infra/api/fastify/controllers/task-create.controller"
import { TaskDeleteController } from "./task/infra/api/fastify/controllers/task-delete.controller"
import { TaskListController } from "./task/infra/api/fastify/controllers/task-list.controller"
import { TaskCreateRoute } from "./task/infra/api/fastify/routes/task-create.route"
import { TaskDeleteRoute } from "./task/infra/api/fastify/routes/task-delete.route"
import { TaskListRoute } from "./task/infra/api/fastify/routes/task-list.route"
import { TaskRepositoryPrisma } from "./task/infra/repositories/task.repository.prisma"
import { TaskCreateUseCaseImpl } from "./task/usecases/task-create.usecase.impl"
import { TaskDeleteUseCaseImpl } from "./task/usecases/task-delete.usecase.impl"
import { TaskListUseCaseImpl } from "./task/usecases/task-list.usecase.impl"

function main() {
    const taskPrismaRepository = new TaskRepositoryPrisma(prisma)
    const taskCreateUseCase = new TaskCreateUseCaseImpl(taskPrismaRepository)
    const taskCreateController = new TaskCreateController(taskCreateUseCase)
    const taskCreateRoute = new TaskCreateRoute(taskCreateController)

    const taskListUseCase = new TaskListUseCaseImpl(taskPrismaRepository)
    const taskListController = new TaskListController(taskListUseCase)
    const taskListRoute = new TaskListRoute(taskListController)

    const taskDeleteUseCase = new TaskDeleteUseCaseImpl(taskPrismaRepository)
    const taskDeleteController = new TaskDeleteController(taskDeleteUseCase)
    const taskDeleteRoute = new TaskDeleteRoute(taskDeleteController)

    const api = new FastifyApi([taskCreateRoute, taskListRoute, taskDeleteRoute])
    const port = 3333

    api.start(port)
}

main()