import './styles/globals.scss';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Button from "@components/Button";
import "./App.scss";
import Input from "@components/Input";
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
      {/* <div
        style={{
          display: "flex",
          gap: "1rem",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
          position: "fixed",
          top: "250px"
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
          position: "fixed",
          top: "500px"
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
      </div> */}
      {/* <div
        className="bg-dark"
        style={{
          width: "60%",
          height: "5vh",
          position: "fixed",
          top: "500px",
          borderRadius: "0 1rem 1rem 0",
        }}
      >
        <Button variant="success">Mundo </Button>
      </div> */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
        }}
      >
        <div
          className="bg-light"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "0 1rem 1rem 0",
          }}
        ></div>
        <div
          className="bg-x2light"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "0 1rem 1rem 0",
          }}
        ></div>
        <div
          className="bg-x3light"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "0 1rem 1rem 0",
          }}
        ></div>
      </div>

      <div
        className=""
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
        }}
      >
        <div
          className="bg-dark"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "0 1rem 1rem 0",
          }}
        ></div>
        <div
          className="bg-x2dark"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "0 1rem 1rem 0",
          }}
        ></div>
        <div
          className="bg-x3dark"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "0 1rem 1rem 0",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
