import { useTodoContext } from "./useTodoContext";

export const Summary = () => {
  const ctx = useTodoContext();

  return (
    <section className="summary_section">
      <p>Total: {ctx.totalTodos}</p>
      <p>Completed: {ctx.completedTodos}</p>
      <p>In progress: {ctx.inProgressTodos}</p>
    </section>
  );
};
