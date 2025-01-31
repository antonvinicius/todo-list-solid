import "reflect-metadata";
import "@/di/container"
import { ApiExpress } from "./core/api/express/api.express"
import { container } from "tsyringe";

function main() {
    const api = container.resolve(ApiExpress)
    api.start(3333)
}

main()