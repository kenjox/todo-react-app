import React from "react";

import { Header } from "./Header";
import { TodosList } from "./TodosList";
import { Legend } from "./Legend";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type Stats = {
  total: number;
  completed: number;
  inProgress: number;
};

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const stats: Stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    inProgress: todos.filter((todo) => !todo.completed).length,
  };

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleTodo = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <main>
      <section className="top_header">
        <h1>Todo App</h1>
        <Legend />
      </section>
      <Header addTodo={addTodo} stats={stats} />
      <TodosList todos={todos} toggleTodo={toggleTodo} />
    </main>
  );
}

export default App;
