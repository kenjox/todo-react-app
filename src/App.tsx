import React from "react";

import { Header } from "./Header";
import { TodosList } from "./TodosList";
import { Legend } from "./Legend";
import { todos as data } from "./dummy";

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

type TodoAction = {
  type: "ADD_TODO" | "TOGGLE_TODO";
  payload: Todo;
};

const todoReducer = (todos: Todo[], action: TodoAction) => {
  if (action.type === "ADD_TODO") {
    return [action.payload, ...todos];
  }

  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) => {
      if (todo.id === action.payload?.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  }
  return todos;
};

function App() {
  // const [todos, setTodos] = React.useState<Todo[]>(data);
  const [todos, dispatch] = React.useReducer(todoReducer, data);

  const stats: Stats = React.useMemo(() => {
    return {
      total: todos.length,
      completed: todos.filter((todo) => todo.completed).length,
      inProgress: todos.filter((todo) => !todo.completed).length,
    };
  }, [todos]);

  const addTodo = React.useCallback(
    (todo: Todo) => {
      dispatch({
        type: "ADD_TODO",
        payload: todo,
      });
    },
    [dispatch]
  );

  const toggleTodo = React.useCallback(
    (todo: Todo) => {
      dispatch({
        type: "TOGGLE_TODO",
        payload: todo,
      });
    },
    [dispatch]
  );

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
