import { ValidationError } from "../errors/validation.error";

export type TaskProps = {
    id: string;
    name: string;
    concluded: boolean;
}

export type TaskFabricProps = {
    name: string
}

export class Task {
    private constructor(private readonly _taskProps: TaskProps) { }

    public get taskProps() { return this._taskProps; };

    public static create({ name }: TaskFabricProps) {
        if (name.trim().length < 1) {
            throw new ValidationError('Nome não ser vazio')
        }

        return new Task({
            concluded: false,
            id: crypto.randomUUID(),
            name
        })
    }
}