import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>

      <div className="nav-links">
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Home;
