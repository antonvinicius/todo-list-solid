import { StatusCode } from "@/core/application/constants/api.constants"
import { ValidationError } from "@/core/domain/errors/validation.error"
import { UseCaseOutput } from "@/core/domain/usecases/usecase.output"

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