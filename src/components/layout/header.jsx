import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">TodoApp</Link>
      </div>

      <nav className="header-menu">
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
