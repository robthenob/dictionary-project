import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This dictionary application was coded by Randi Bradley. It is open
          sourced on{" "}
          <a href="https://github.com/robthenob/dictionary-project">Github</a>{" "}
          and hosted on{" "}
          <a href="https://sensational-snickerdoodle-a846ea.netlify.app">
            Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
