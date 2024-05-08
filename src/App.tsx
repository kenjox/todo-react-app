import { Header } from "./Header";
import { Todos } from "./Todos";
import { Legend } from "./Legend";

function App() {
  return (
    <main>
      <section className="top_header">
        <h1>Todo App</h1>
        <Legend />
      </section>
      <Header />
      <Todos />
    </main>
  );
}

export default App;
