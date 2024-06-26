import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div className="h-12 flex justify-between items-center px-12">
      <div>Navbar</div>
      <Dropdown />
    </div>
  );
}

export default Navbar;
