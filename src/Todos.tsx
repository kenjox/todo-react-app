import { Todo } from "./Todo";
import { useTodoContext } from "./useTodoContext";

export const Todos = () => {
  const ctx = useTodoContext();
  return (
    <ul className="todos_list">
      {ctx.todos.length !== 0 ? (
        ctx.todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })
      ) : (
        <h1>You have no todos yet 💩</h1>
      )}
    </ul>
  );
};
