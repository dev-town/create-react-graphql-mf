import { IExample, IExampleInput } from '../../types/graphql-generated';

class Repo {
    private content: IExample[];

    constructor() {
        this.content = [
            {
                id: '1',
                title: 'Example 1',
                content: 'This is some example',
            },
        ];
    }

    getExamples() {
        return this.content;
    }

    getExampleById(id: string): IExample {
        return this.content.find((item) => item.id === id)!;
    }

    createExample(input: IExampleInput) {
        const newItem: IExample = {
            id: `${+new Date()}`,
            ...input,
        };

        this.content = [...this.content, newItem];

        return newItem;
    }
}

export const repo = new Repo();
