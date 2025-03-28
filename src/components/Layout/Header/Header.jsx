import { FaBarsStaggered } from "react-icons/fa6";
import HeaderBag from "./HeaderBag";
import HeaderLastLogo from "./HeaderLastLogo";
import HeaderLogo from "./HeaderLogo";
import HeaderMobile from "./HeaderMobile";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <header className="  bg-[#EFEFED]  p-4">
      <div className="container flex items-center justify-between">
        <HeaderLogo />
        <HeaderLastLogo />
        <div className="hidden sm:flex items-center gap-4 relative">
          <HeaderSearch />
          <HeaderBag />
          <button className="bg-[#D39C4A] px-5 py-2 rounded-full text-sm hidden sm:flex">
            Login
          </button>
        </div>
        <HeaderMobile />
      </div>
    </header>
  );
}
