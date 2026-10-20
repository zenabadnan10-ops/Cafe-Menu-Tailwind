import "./style.css";

import { menuItems } from "./data/menu.js";
import { renderMenuCards } from "./components/menu-card.js";
import { reviews } from "./data/testimonials.js";
import { renderReviewCards } from "./components/review-card.js";

const reviewsGrid = document.getElementById("reviews-grid");

reviewsGrid.innerHTML = reviews.map((r) => renderReviewCards(r)).join("");

const menu = document.getElementById("menu-div");

menu.innerHTML = menuItems.map((item) => renderMenuCards(item)).join("");