import { createContext, ReactNode, useState } from "react";

export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

type TodosState = {
  todos: TodoType[];
  totalTodos: number;
  completedTodos: number;
  inProgressTodos: number;
  addTodo: (todo: TodoType) => void;
  toggleTodo: (todoId: number) => void;
  removeTodo: (todoId: number) => void;
};

export const TodoContext = createContext<TodosState | null>(null);

// HOC
type TodoContextProviderProps = {
  children: ReactNode;
};

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const contextValue: TodosState = {
    todos,
    totalTodos: todos.length,
    completedTodos: todos.filter((todo) => todo.completed).length,
    inProgressTodos: todos.filter((todo) => !todo.completed).length,
    addTodo: (todo: TodoType) => {
      setTodos([...todos, todo]);
    },
    toggleTodo: (todoId: number) => {
      const updatedTodo = todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      setTodos(updatedTodo);
    },
    removeTodo: (todoId: number) => {
      const updateTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updateTodos);
    },
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};
