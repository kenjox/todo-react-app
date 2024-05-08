import { FormEvent } from "react";
import { TodoType } from "./App";

type HeaderProps = {
  addTodo: (todo: TodoType) => void;
};

export const Header = ({ addTodo }: HeaderProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: TodoType = {
      id: Math.random(),
      title: "Demo", // Fix to come from the form
      completed: false,
    };

    addTodo(newTodo);
  };

  return (
    <header className="header_primary">
      <section className="summary_section">
        <p>Total: 5</p>
        <p>Completed: 2</p>
        <p>In progress: 3</p>
      </section>

      <form className="form_section" onSubmit={handleSubmit}>
        <p className="form_field">
          <input
            className="input_field"
            type="text"
            placeholder="Enter todo ..."
          />
        </p>
        <p>
          <button className="add_todo_btn">Add</button>
        </p>
      </form>
    </header>
  );
};
