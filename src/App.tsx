import "./App.css";

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <div id="myDIV" className="header">
        <form>
          <p>
            <input type="text" id="myInput" placeholder="Title..." />
          </p>
          <p>
            <button className="addBtn">Add</button>
          </p>
        </form>
      </div>

      <ul id="myUL">
        <li>Hit the gym</li>
        <li className="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li>
      </ul>
    </>
  );
}

export default App;
