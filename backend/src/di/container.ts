import { Api } from "@/core/api/api";
import { ApiExpress } from "@/core/api/express/api.express";
import { CreateTaskRoute } from "@/task/api/express/routes/create-task.route";
import { Route } from "@/core/api/route";
import { TaskRepositoryInMemory } from "@/task/application/repositories/task.repository.memory";
import { CreateTaskUseCaseImpl } from "@/task/application/usecases/create-task.usecase";
import { TaskRepository } from "@/task/domain/repositories/task.repository";
import { CreateTaskUseCase } from "@/task/domain/usecases/create-task.usecase";
import { Request, Response } from "express";
import { container } from "tsyringe";

container.registerSingleton<TaskRepository>(
    "TaskRepositoryInMemory",
    TaskRepositoryInMemory
)
container.registerSingleton<CreateTaskUseCase>(
    "CreateTaskUseCaseImpl",
    CreateTaskUseCaseImpl
)
container.registerSingleton<Route<Request, Response>>(
    "Route",
    CreateTaskRoute
)
container.registerSingleton<Api>(
    "ApiExpress",
    ApiExpress
)