import { useState } from "react";

import { Header } from "./Header";
import { Todos } from "./Todos";
import { Legend } from "./Legend";

export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

const todosMock: TodoType[] = [
  {
    id: 1,
    title: "Learn react with TS",
    completed: false,
  },
  {
    id: 2,
    title: "Learn useContext",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState<TodoType[]>(todosMock);

  const addTodo = (todo: TodoType) => {
    setTodos([...todos, todo]);
  };

  return (
    <main>
      <section className="top_header">
        <h1>Todo App</h1>
        <Legend />
      </section>
      <Header addTodo={addTodo} />
      <Todos todos={todos} />
    </main>
  );
}

export default App;
