import { StatusCode } from "@/core/application/constants/api.constants";

export interface UseCaseOutput {
    data?: any,
    status: StatusCode,
    error?: string
}