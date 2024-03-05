import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="Phoenix" />
        <footer className="Portfolio-links">
          <p>
            Open sourced on{" "}
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
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
