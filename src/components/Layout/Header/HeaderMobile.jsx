import { Menu, X } from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { HeaderItems } from "../../../Constant/HeaderItem";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleMenu} className="md:hidden p-2">
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-white/70   z-40"
          onClick={toggleMenu}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ stiffness: 150 }}
        className="fixed top-0 right-0 w-64 h-full bg-[#EFEFED] shadow-lg z-50 p-6 flex flex-col"
      >
        <button
          onClick={toggleMenu}
          className="self-end mb-4 bg-white size-10 flex items-center justify-center rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        <nav>
          <ul className="space-y-4">
            {HeaderItems.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  className="text-lg font-medium text-gray-700 hover:text-[#ed952b]"
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
