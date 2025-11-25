import { Link } from "react-router-dom";
import "../index.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-logo">KZN</h1>

      <p className="home-subtitle">Small Steps, Big Moves.</p>

      <Link to="/categories">
        <button className="button main-cta">Become 1% Better Today</button>
      </Link>
    </div>
  );
}
