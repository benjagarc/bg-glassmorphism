// import './styles/globals.scss';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
// import Button from "./components/Button";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem"
        }}
      >
        <div
          style={{ display: "block", width: "200px", height: "200px" }}
          className="bg-dark"
        ></div>
        <div
          style={{ display: "block", width: "200px", height: "200px" }}
          className="bg-x2dark"
        ></div>
        <div
          style={{ display: "block", width: "200px", height: "200px" }}
          className="bg-x3dark"
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "block", width: "200px", height: "200px" }}
          className="bg-light"
        ></div>
        <div
          style={{ display: "block", width: "200px", height: "200px" }}
          className="bg-x2light"
        ></div>
        <div
          style={{ display: "block", width: "200px", height: "200px" }}
          className="bg-x3light"
        ></div>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
