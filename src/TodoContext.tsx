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
};

type TodoActions = {
  addTodo: (todo: TodoType) => void;
  toggleTodo: (todoId: number) => void;
  removeTodo: (todoId: number) => void;
};

type TodoContextProviderProps = {
  children: ReactNode;
};

type TodoContextValue = TodosState & TodoActions;

export const TodoContext = createContext<TodoContextValue | null>(null);

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const contextValue: TodoContextValue = {
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
