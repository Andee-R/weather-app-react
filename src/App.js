import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchForm />
        <div className="Portfolio-links">
          <p>
            Open sorced on{" "}
            <a
              href="https://github.com/Andee-R/weather-app-react"
              target="_blank"
              rel="noopener noreferrer">
              Github
            </a>
            , hosted on{" "}
            <a
              href="https://tranquil-scone-a86042.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">
              Netlify
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
