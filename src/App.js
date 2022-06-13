
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <span>Dictionary App</span>
        </header>
        <main>
          <Dictionary defaultKeyword="sunflower"/>
        </main>
        <footer className="App-footer">
          <small>Coded by Christina Motu</small>
        </footer>
      </div>
    </div>
  );
}
