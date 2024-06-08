import React from "react";
import { Todo } from "./App";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (todo: Todo) => void;
};

export const TodoItem = React.memo(({ todo, toggleTodo }: TodoItemProps) => {
  console.log("Rendering single todo ", todo.id);

  return (
    <li key={todo.id} className="todo_item">
      <p className={`todo_title ${todo.completed ? "completed" : ""}`}>
        {todo.title}
      </p>
      <p>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />
        <span className="checkbox_text">Completed</span>
      </p>
    </li>
  );
});
