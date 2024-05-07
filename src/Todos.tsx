import { TodoType } from "./App";

type TodosProp = {
  todos: TodoType[];
};

type TodoProp = {
  todo: TodoType;
};

function Todo({ todo }: TodoProp) {
  return <li>{todo.title}</li>;
}

export const Todos = ({ todos }: TodosProp) => {
  return (
    <ul id="myUL">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};
