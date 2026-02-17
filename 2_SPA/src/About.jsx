import { Link } from "react-router-dom";
import "./App.css";

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <Link className="back-link" to="/">← Back to Home</Link>
    </div>
  );
}

export default About;
