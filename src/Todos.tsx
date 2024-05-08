import { TodoType } from "./App";

type TodosProp = {
  todos: TodoType[];
};

type TodoProp = {
  todo: TodoType;
};

function Todo({ todo }: TodoProp) {
  return <li className="todo_item">{todo.title}</li>;
}

export const Todos = ({ todos }: TodosProp) => {
  return (
    <ul className="todos_list">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
