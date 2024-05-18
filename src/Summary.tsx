import { Stats } from "./App";

type SummaryProps = {
  stats: Stats;
};

export const Summary = ({ stats }: SummaryProps) => {
  return (
    <section className="summary_section">
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>In progress: {stats.inProgress}</p>
    </section>
  );
};
