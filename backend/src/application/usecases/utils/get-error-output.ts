import { StatusCode } from "@/application/constants/api.constants"
import { ValidationError } from "@/domain/errors/validation.error"
import { UseCaseOutput } from "@/domain/usecases/usecase.output"

export function getErrorOutput(error: unknown) {
    if (error instanceof ValidationError) {
        const output: UseCaseOutput = {
            status: StatusCode.BAD_REQUEST,
            error: error.message
        }
        return output
    }

    const output: UseCaseOutput = {
        status: StatusCode.INTERNAL_SERVER_ERROR,
        error: 'Erro interno'
    }
    return output
}