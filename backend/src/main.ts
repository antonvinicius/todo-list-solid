import { FastifyApi } from "./core/infra/api/fastify/fastify.api"
import { prisma } from "./core/infra/package/prisma/prisma"
import { TaskCreateController } from "./task/infra/api/fastify/controllers/task-create.controller"
import { TaskCreateRoute } from "./task/infra/api/fastify/routes/task-create.route"
import { TaskRepositoryPrisma } from "./task/infra/repositories/task.repository.prisma"
import { TaskCreateUseCaseImpl } from "./task/usecases/task-create.usecase.impl"

function main() {
    const taskPrismaRepository = new TaskRepositoryPrisma(prisma)
    const taskCreateUseCase = new TaskCreateUseCaseImpl(taskPrismaRepository)
    const taskCreateController = new TaskCreateController(taskCreateUseCase)
    const taskCreateRoute = new TaskCreateRoute(taskCreateController)

    const api = new FastifyApi([taskCreateRoute])
    const port = 3333

    api.start(port)
}

main()