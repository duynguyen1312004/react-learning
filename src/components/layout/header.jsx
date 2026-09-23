import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">TodoApp</Link>
      </div>

      <nav className="header-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Book</NavLink>
        <NavLink to="/users">User</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};
export default Header;
