import { Todo } from "./App";
import { TodoItem } from "./TodoItem";

type TodosProps = {
  todos: Todo[];
  toggleTodo: (todoId: string) => void;
};

export const TodosList = ({ todos, toggleTodo }: TodosProps) => {
  return (
    <ul className="todos_list">
      {todos.length < 1 ? (
        <h2 style={{ textAlign: "center" }}>No todos added yet!</h2>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      )}
    </ul>
  );
};
