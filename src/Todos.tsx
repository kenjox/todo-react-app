export const Todos = () => {
  return (
    <ul className="todos_list">
      <li className="todo_item">
        <p>Todo 1</p>
        <p>
          <input type="checkbox" onChange={() => {}} />
          <span className="checkbox_text">Completed</span>
        </p>
      </li>
      <li className="todo_item">
        <p className="todo_title completed">Todo 1</p>
        <p>
          <input type="checkbox" checked onChange={() => {}} />
          <span className="checkbox_text">Completed</span>
        </p>
      </li>
    </ul>
  );
};
