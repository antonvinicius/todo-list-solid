import { ApiExpress } from "./api/express/api.express"
import { CreateTaskRoute } from "./api/express/routes/create-task.route"
import { TaskRepositoryInMemory } from "./application/repositories/task.repository.memory"
import { CreateTaskUseCaseImpl } from "./application/usecases/create-task.usecase"

function main() {
    const taskRepository = new TaskRepositoryInMemory()
    const createTaskUseCase = new CreateTaskUseCaseImpl(taskRepository)
    const createTaskRoute = new CreateTaskRoute(createTaskUseCase)
    const api = new ApiExpress([createTaskRoute])

    api.start(3333)
}

main()