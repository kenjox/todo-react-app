import React, { ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "./App";

type AddTodoFormProps = {
  addTodo: (todo: Todo) => void;
};

export const AddTodoForm = React.memo(({ addTodo }: AddTodoFormProps) => {
  const [todoTitle, setTodoTitle] = React.useState("");

  console.log("Rendering add new todo form ...");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addTodo({
      id: uuidv4(),
      title: todoTitle,
      completed: false,
    });

    setTodoTitle("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  return (
    <form className="form_section" onSubmit={handleSubmit}>
      <p className="form_field">
        <input
          className="input_field"
          type="text"
          name="title"
          value={todoTitle}
          placeholder="Enter todo ..."
          onChange={handleChange}
          required
        />
      </p>
      <p>
        <button className="add_todo_btn">Add</button>
      </p>
    </form>
  );
});
