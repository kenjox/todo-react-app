import { Todo } from "./App";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (todoId: string) => void;
};

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  return (
    <li key={todo.id} className="todo_item">
      <p className={`todo_title ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </p>
      <p>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="checkbox_text">Completed</span>
      </p>
    </li>
  );
};
