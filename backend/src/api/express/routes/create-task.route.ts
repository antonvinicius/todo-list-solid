import { HttpMethods, Route } from "@/api/route";
import { CreateTaskUseCase } from "@/domain/usecases/create-task.usecase";
import { Request, Response } from "express";

export class CreateTaskRoute implements Route<Request, Response> {
    constructor(private readonly createTaskUseCase: CreateTaskUseCase) { }

    method = HttpMethods.POST
    path = "/task"
    handler = async (request: Request, response: Response) => {
        const { status, data, error } = await this.createTaskUseCase.execute(request.body)
        response.status(status).json(data ?? error)
    }
}