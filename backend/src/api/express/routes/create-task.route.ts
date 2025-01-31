import { HttpMethods, Route } from "@/api/route";
import { CreateTaskUseCase } from "@/domain/usecases/create-task.usecase";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateTaskRoute implements Route<Request, Response> {
    constructor(@inject("CreateTaskUseCaseImpl") private readonly createTaskUseCase: CreateTaskUseCase) { }

    method = HttpMethods.POST
    path = "/task"
    handler = async (request: Request, response: Response) => {
        const { status, data, error } = await this.createTaskUseCase.execute(request.body)
        response.status(status).json(data ?? error)
    }
}