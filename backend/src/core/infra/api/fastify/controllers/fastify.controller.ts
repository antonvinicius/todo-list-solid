import { FastifyRequest, FastifyReply } from 'fastify'

export interface FastifyController {
    handle: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
}