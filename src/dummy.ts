import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const generateTodoArray = (): Todo[] => {
  const todoArray: Todo[] = [];

  for (let i = 0; i < 100; i++) {
    const todo: Todo = {
      id: uuidv4(),
      title: `Todo ${i + 1}`,
      completed: Math.random() < 0.5, // Randomly assign true or false
    };

    todoArray.push(todo);
  }

  return todoArray;
};

export const todos = generateTodoArray();
