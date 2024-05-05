import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <button className="container btn btn-primary">Hello</button>
      <footer>
        The progect was coded by{" "}
        <a
          href="https://github.com/ViktoriiaMorozenko"
          target="_blank"
          rel="noreferrer">
          Viktoriia Morozenko
        </a>{" "}
        and is on{" "}
        <a
          href="https://github.com/ViktoriiaMorozenko/SheCodesResponsive_project"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://portfollio-viktoriiamorozenko.netlify.app/"
          target="_blank"
          rel="noreferrer">
          {" "}
          Netify
        </a>
      </footer>
    </div>
  );
}