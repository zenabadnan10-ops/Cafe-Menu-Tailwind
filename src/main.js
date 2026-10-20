import "./style.css";

import { reviews } from "./data/testimonials.js";
import { renderReviewCards } from "./components/review-card.js";
import { initFilter } from "./components/menu-filter.js";

const reviewsGrid = document.getElementById("reviews-grid");
reviewsGrid.innerHTML = reviews.map((r) => renderReviewCards(r)).join("");

initFilter();