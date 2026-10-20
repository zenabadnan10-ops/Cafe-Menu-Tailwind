import { menuItems } from "/src/data/menu.js";
import { renderMenuCards } from "./menu-card.js";

const menu = document.getElementById("menu-div");
const buttons = document.querySelectorAll("#menu button");

function showCategory(category) {
  menu.innerHTML = menuItems
    .filter((item) => category === "All" || item.category === category)
    .map((item) => renderMenuCards(item))
    .join("");

  buttons.forEach((btn) => {
    const active = btn.textContent.trim() === category;
    btn.classList.toggle("bg-[#3B2A20]", active);
    btn.classList.toggle("text-[#F6EFE4]", active);
    btn.classList.toggle("text-[#3B2A20]", !active);
  });
}

export function initFilter() {
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => showCategory(btn.textContent.trim()))
  );
  showCategory("All");
}