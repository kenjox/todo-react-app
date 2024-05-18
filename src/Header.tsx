import { AddTodoForm } from "./AddTodoForm";
import { Stats, Todo } from "./App";
import { Summary } from "./Summary";

type HeaderProps = {
  addTodo: (todo: Todo) => void;
  stats: Stats;
};

export const Header = ({ addTodo, stats }: HeaderProps) => {
  return (
    <header className="header_primary">
      <Summary stats={stats} />
      <AddTodoForm addTodo={addTodo} />
    </header>
  );
};
