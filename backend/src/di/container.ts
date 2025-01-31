import { Api } from "@/api/api";
import { ApiExpress } from "@/api/express/api.express";
import { CreateTaskRoute } from "@/api/express/routes/create-task.route";
import { Route } from "@/api/route";
import { TaskRepositoryInMemory } from "@/application/repositories/task.repository.memory";
import { CreateTaskUseCaseImpl } from "@/application/usecases/create-task.usecase";
import { TaskRepository } from "@/domain/repositories/task.repository";
import { CreateTaskUseCase } from "@/domain/usecases/create-task.usecase";
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