import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <NavLink className="navitem" to="/story">
          Story
        </NavLink>
        <NavLink className="navitem" to="/quote">
          Quote
        </NavLink>
        <NavLink className="navitem" to="/shayari">
          Shayari
        </NavLink>
        <NavLink className="navitem" to="/joke">
          Joke
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
