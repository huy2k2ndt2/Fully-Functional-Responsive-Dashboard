import React, { useState } from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const menuFirstIcons = [
  { Icon: FaDelicious, id: uuidv4() },
  { Icon: FaShoppingCart, id: uuidv4() },
  { Icon: FaWallet, id: uuidv4() },
  { Icon: FaChartLine, id: uuidv4() },
  { Icon: FaRegClock, id: uuidv4() },
];

const menuLastIcons = [
  { Icon: FaCog, id: uuidv4() },
  { Icon: FaSignOutAlt, id: uuidv4() },
];

function Menu() {
  const [menuItemActive, setMenuItemActive] = useState(0);

  return (
    <menu>
      <img src={logo} alt="" />

      <ul id="mainMenu">
        {menuFirstIcons.map(({ Icon, id }) => (
          <li
            key={id}
            className={`${id === menuItemActive && "active"}`}
            onClick={() => setMenuItemActive(id)}
          >
            <a href="#">{<Icon />}</a>
          </li>
        ))}
      </ul>

      <ul className="lastMenu">
        {menuLastIcons.map(({ Icon, id }) => (
          <li
            key={id}
            className={`${id === menuItemActive && "active"}`}
            onClick={() => setMenuItemActive(id)}
          >
            <a href="#">{<Icon />}</a>
          </li>
        ))}
      </ul>
    </menu>
  );
}

export default Menu;
