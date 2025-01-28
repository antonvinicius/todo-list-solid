import { FastifyRequest, FastifyReply } from 'fastify'
import { FastifyController } from '../controllers/fastify.controller';

export interface Route {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    path: string;
    controller: FastifyController
}