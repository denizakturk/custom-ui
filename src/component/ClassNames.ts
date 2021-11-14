export class ClassNames {
    classNames?: string[]
    constructor(rootClassNames?: string[]) {
        this.classNames = rootClassNames
    }

    add = (name?: string): this => {
        if (name) {
            this.classNames?.push(name)
        }
        return this
    }

    addMany = (names?: string[]): this => {
        if (names) {
            names.map((val: string, index) => { this.add(val) })
        }
        return this
    }

    remove = (name: string): this => {
        let elemLength: number = this.classNames?.length ?? 0;
        for (let i = 0; i < elemLength; i++) {
            if (this.classNames?.length && this.classNames[i] == name) {
                this.classNames?.splice(i, 1)
            }
        }
        return this
    }

    getName(): string {
        return this.classNames?.join(" ") ?? ""
    }
}