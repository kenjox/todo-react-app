import { v4 as uuidv4 } from "uuid";

export const todos = Array.from({ length: 5 }, (_, i) => ({
  id: uuidv4(),
  title: `Task ${i + 1}`,
  completed: Math.random() < 0.5,
}));
