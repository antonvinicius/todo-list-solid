import { AppError } from "../../../core/domain/errors/AppError";

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

    public markAsDone(): Task {
        return new Task(
            this._id,
            this._name,
            this._createdAt,
            new Date().toISOString(),
            true
        );
    }

    public markAsUndone(): Task {
        return new Task(
            this._id,
            this._name,
            this._createdAt,
            new Date().toISOString(),
            false
        );
    }

    public changeName(newName: string): Task {
        if (!newName || newName.length < 3) {
            throw new AppError("Nome é inválido");
        }

        return new Task(
            this._id,
            newName,
            this._createdAt,
            new Date().toISOString(),
            this._concluded
        )
    }
}
