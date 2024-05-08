import { AddTodoForm } from "./AddTodoForm";
import { Summary } from "./Summary";

export const Header = () => {
  return (
    <header className="header_primary">
      <Summary />
      <AddTodoForm />
    </header>
  );
};
