import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Welcome</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/table/1">Tahle One</Link>
        <Link to="/table/2">Tahle Two</Link>
      </div>
    </nav>
  );
};

export default Navbar;
