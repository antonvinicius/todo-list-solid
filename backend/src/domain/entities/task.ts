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
        return new Task({
            concluded: false,
            id: crypto.randomUUID(),
            name
        })
    }
}