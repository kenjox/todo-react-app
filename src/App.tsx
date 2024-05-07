import { useState } from "react";

import "./App.css";
import { Header } from "./Header";
import { Todos } from "./Todos";

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
    <>
      <h1>Todo App</h1>
      <Header addTodo={addTodo} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
