import React from 'react'
import { HeaderItems } from '../../../Constant/HeaderItem';
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <nav className="hidden sm:flex">
    <ul className="flex items-center gap-4">
      {HeaderItems.map((Hitem) => {
        return (
          <li
            key={Hitem.id}
            className="capitalize transition-all duration-300 hover:bg-[#D39C4A] px-4 py-2 rounded-full text-md sm:text-sm font-medium"
          >
            <Link to={Hitem.link}>{Hitem.name}</Link>
          </li>
        );
      })}
    </ul>
  </nav>  )
}
