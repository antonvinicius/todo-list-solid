import { Api } from "../Api";
import Fastify, { FastifyInstance } from 'fastify'
import { Route } from "./routes/route";


export class FastifyApi implements Api {
    private fastify: FastifyInstance

    constructor(private routes: Route[]) {
        this.fastify = Fastify({
            logger: true
        })
        this.buildRoutes()
    }

    public start(port: number): void {
        this.fastify.listen({ port }, (err, address) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log(`Server started at port ${port} 🚀`)
            this.routes.forEach(route => {
                console.log(`${route.method} - ${route.path}`)
            })
        })
    }

    private buildRoutes() {
        this.routes.forEach(route => {
            this.fastify[route.method](route.path, route.controller.handle)
        })
    }
}