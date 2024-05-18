export const AddTodoForm = () => {
  return (
    <form className="form_section">
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
