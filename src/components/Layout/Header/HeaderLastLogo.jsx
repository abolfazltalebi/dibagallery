import { Link } from "react-router-dom";

import { HeaderItems } from "../../../Constant/HeaderItem";
export default function HeaderLastLogo() {
  return (
    <div className="hidden md:inline">
      <ul className="flex items-center">
        {HeaderItems.map(({ id, name, link }) => {
          return (
            <li className="hover-header" key={id}>
              <Link to={link}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
