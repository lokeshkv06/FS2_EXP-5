import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1 style={{ fontFamily: "Arial, sans-serif" }}>Skills</h1>

      <ul style={{ fontFamily: "Georgia, serif", fontSize: "18px" }}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
      </ul>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 15px",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Go to Home
      </Link>
    </>
  );
}

export default Dashboard;
