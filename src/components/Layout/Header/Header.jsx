import headerLogo from "@/assets/images/icons/headerLogo.svg";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";


export default function Header() {
  const HeaderItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "collection", link: "/collection" },
    { id: 3, name: "about us", link: "/aboutUs" },
    { id: 4, name: "contacts", link: "/contacts" },
  ];
  return (
    <header className="bg-[#EFEFED] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            {HeaderItems.map((Hitem) => {
              return (
                <li key={Hitem.id} className="capitalize transition-all duration-300 hover:bg-[#D39C4A] px-4 py-2 rounded-full text-md sm:text-sm ">
                  <Link to={Hitem.link}>{Hitem.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
     
      </div>
    </header>
  );
}
