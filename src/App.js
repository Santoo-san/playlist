import "./App.css";
import { nanoid } from "nanoid";
import SongOverview from "./SongOverview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SongOverview />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{nanoid(5)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
