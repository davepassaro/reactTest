import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Welcome</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/table/1">Table One</Link>
        <Link to="/table/2">Table Two</Link>
        <Link to="/musicQuiz">Music Quiz</Link>

      </div>
    </nav>
  );
};

export default Navbar;
