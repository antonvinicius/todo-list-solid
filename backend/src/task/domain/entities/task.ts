export type TaksProps = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    concluded: boolean;
}

export class Task {
    private constructor(
        private _id: string,
        private _name: string,
        private _createdAt: string,
        private _updatedAt: string,
        private _concluded: boolean
    ) { }

    public static create(name: string): Task {
        return new Task(
            crypto.randomUUID(),
            name,
            new Date().toISOString(),
            new Date().toISOString(),
            false
        )
    }

    public static with(task: TaksProps): Task {
        return new Task(
            task.id,
            task.name,
            task.createdAt,
            task.updatedAt,
            task.concluded
        )
    }

    get id(): string { return this._id; }

    get name(): string { return this._name; }

    get createdAt(): string { return this._createdAt; }

    get updatedAt(): string { return this._updatedAt; }

    get concluded(): boolean { return this._concluded; }

    public markAsDone(): void {
        this._updatedAt = new Date().toISOString();
        this._concluded = true;
    }

    public markAsUndone(): void {
        this._updatedAt = new Date().toISOString();
        this._concluded = false;
    }


    public set name(name: string) {
        if (!name) throw new Error("Invalid name");
        this._name = name;
    }
}
