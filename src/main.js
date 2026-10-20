import "./style.css";

import { menuItems } from "./data/menu.js";
import { renderMenuCards } from "./components/menu-card.js";

const menu = document.getElementById("menu-div");

menu.innerHTML = menuItems.map((item) => renderMenuCards(item)).join("");