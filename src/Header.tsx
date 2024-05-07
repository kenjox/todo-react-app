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
    <div id="myDIV" className="header">
      <section className="summary">
        <ul>
          <li>Total todos 5</li>
          <li>Completed 2</li>
          <li>In progress: 3</li>
        </ul>
      </section>

      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" id="myInput" placeholder="Title..." />
        </p>
        <p>
          <button className="addBtn">Add</button>
        </p>
      </form>
    </div>
  );
};
