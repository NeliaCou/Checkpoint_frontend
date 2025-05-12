import { Link } from "react-router-dom";
import "../style/Header.css";

export function Header() {
  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      <Link to="/">Countries</Link>
    </header>
  );
}
