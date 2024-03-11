interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Readonly<Todo> = {
    title: "Delete inactive users",
    description: "..."
};

type User = Readonly<{
    name: string;
    age: number;
}>;

const user1: User = {
    name: "John",
    age: 30
};

