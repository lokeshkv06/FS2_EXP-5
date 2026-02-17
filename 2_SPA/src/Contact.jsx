import { Link } from "react-router-dom";
import "./App.css";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <Link className="back-link" to="/">← Back to Home</Link>
    </div>
  );
}

export default Contact;
