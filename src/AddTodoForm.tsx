import { FormEvent } from "react";
import { TodoType } from "./TodoContext";
import { useTodoContext } from "./useTodoContext";

export const AddTodoForm = () => {
  const ctx = useTodoContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const newTodo: TodoType = {
      id: Math.random(),
      title: data.title as string,
      completed: false,
    };

    ctx.addTodo(newTodo);
  };

  return (
    <form className="form_section" onSubmit={handleSubmit}>
      <p className="form_field">
        <input
          className="input_field"
          type="text"
          name="title"
          placeholder="Enter todo ..."
          required
        />
      </p>
      <p>
        <button className="add_todo_btn">Add</button>
      </p>
    </form>
  );
};
