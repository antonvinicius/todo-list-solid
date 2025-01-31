export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export const HttpMethods = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
} as const

export interface Route<Request, Response> {
    method: HttpMethod,
    path: string,
    handler: (request: Request, response: Response) => Promise<void>
}