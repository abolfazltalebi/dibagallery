
import { FaBarsStaggered } from "react-icons/fa6";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderBag from "./HeaderBag";

export default function Header() {
  return (
    <header className="bg-[#EFEFED] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <HeaderLogo />
        <HeaderNav />
        <div className="flex items-center gap-4 relative">
          <HeaderSearch />
          <HeaderBag />
          <button className="bg-[#D39C4A] px-5 py-2 rounded-full text-sm hidden sm:flex">
            Login
          </button>
          <FaBarsStaggered className="text-xl md:text-2xl cursor-pointer sm:hidden" />
        </div>
      </div>
    </header>
  );
}
