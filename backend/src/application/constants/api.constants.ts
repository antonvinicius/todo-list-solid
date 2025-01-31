export type StatusCode = 200 | 201 | 400 | 500

export const StatusCode = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500
} as const