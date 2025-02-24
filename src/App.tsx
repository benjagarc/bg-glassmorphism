import './styles/globals.scss';
import "./App.scss";

function App() {
  return (
    <>
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
