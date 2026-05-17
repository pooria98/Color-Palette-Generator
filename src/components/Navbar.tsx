import Dropdown from "./Dropdown";
import Title from "./Title";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b-2 border-b-neutral-200 px-4 py-2">
        <Title />
        <Dropdown />
      </nav>
    </>
  );
};

export default Navbar;
