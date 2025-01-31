import { injectable, injectAll } from "tsyringe";
import { Api } from "../api";
import { Route } from "../route";
import express, { json, Request, Response } from 'express'

@injectable()
export class ApiExpress implements Api {
    private app = express()

    constructor(@injectAll("Route") private readonly routes: Route<Request, Response>[]) {
        this.app.use(json())
        routes.forEach(route => {
            this.app[route.method](route.path, route.handler)
        })
    }

    start(port: number): void {
        this.app.listen(port, () => {
            console.log(`🚀 Running on port ${port}`)
            console.log('✅ Available routes:')
            this.routes.forEach(route => {
                console.log(`${route.method.toUpperCase()} - ${route.path}`)
            })
            console.log('🧑‍💻 Happy Coding!')
        })
    }
}