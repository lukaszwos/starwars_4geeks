import Dropdown from "./Dropdown";
import { useContext } from "react";
import { TheContext } from "./context/context";
import { Link } from "react-router-dom";

function Navbar() {
  const { state, dispatch } = useContext(TheContext);
  return (
    <div className="h-12 flex justify-between items-center px-12 py-12">
      <Link to="/">
        <div className="font-mono text-4xl">SWdb</div>
      </Link>
      {state.favourites.length > 0 && <Dropdown />}
    </div>
  );
}

export default Navbar;
