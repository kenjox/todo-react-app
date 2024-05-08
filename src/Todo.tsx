import { TodoType } from "./TodoContext";
import { useTodoContext } from "./useTodoContext";

type TodoProp = {
  todo: TodoType;
};

export const Todo = ({ todo }: TodoProp) => {
  const ctx = useTodoContext();
  const completedStatus = todo.completed ? "completed" : "";

  return (
    <li className="todo_item">
      <span
        className={`todo_title ${completedStatus}`}
        onClick={() => ctx.toggleTodo(todo.id)}
      >
        {todo.title}
      </span>
      <span className="cross_icon" onClick={() => ctx.removeTodo(todo.id)}>
        X
      </span>
    </li>
  );
};
