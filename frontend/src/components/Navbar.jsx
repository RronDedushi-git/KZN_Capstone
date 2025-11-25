import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand-logo">
          KZN
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
      </div>
      
    </nav>
  );



}
