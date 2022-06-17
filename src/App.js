
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer className="App-footer">
          <small>Coded by Christina Motu</small>
        </footer>
      </div>
    </div>
  );
}
