# Ember & Bean: Cafe Website

A responsive cafe landing page built to practice **Tailwind CSS**. The menu and review cards are generated with JavaScript, and the rest of the page is static HTML.

## Features

- Responsive layout that works on phones, tablets and desktops
- Hero section with call-to-action buttons
- Menu cards rendered from a data file, with category filter buttons (All, Coffee, Tea, Pastries, Desserts)
- Breakfast set offer banner
- "Our story" section with cafe stats
- Guest review cards rendered from a data file
- Table reservation form
- Hover, active and selected states styled with Tailwind variants

## Tech Stack

- HTML5
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES modules)
- [Vite](https://vitejs.dev/)
- ESLint and Prettier

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer

### Installation

```bash
git clone https://github.com/zenabadnan10-ops/Cafe-Menu-Tailwind.git
cd Cafe-Menu-Tailwind
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local address Vite prints in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## Project Structure

```
Cafe-Menu-Tailwind/
├── public/                 # Images (breakfast, menu items)
├── src/
│   ├── components/
│   │   ├── menu-card.js    # Returns the HTML for one menu card
│   │   └── review-card.js  # Returns the HTML for one review card
│   ├── data/
│   │   ├── menu.js         # Menu items
│   │   └── testimonials.js # Guest reviews
│   ├── filter.js           # Category filter logic
│   ├── main.js             # Entry point
│   └── style.css           # Tailwind import
├── index.html
├── vite.config.js
└── package.json
```

## How It Works

1. `data/menu.js` and `data/testimonials.js` hold the content as arrays of objects.
2. `components/menu-card.js` and `components/review-card.js` turn one object into an HTML string.
3. `main.js` and `filter.js` map over the data, join the strings and insert them into the page.
4. The filter buttons in `index.html` re-render the menu grid with only the chosen category.

## Customizing

- **Add a menu item:** add an object to the array in `src/data/menu.js`. Its `category` must match one of the filter button labels.
- **Add a review:** add an object to the array in `src/data/testimonials.js`.
- **Add a category:** add a button in `index.html` and use the same name as the `category` on your items.
- **Change images:** replace the files in `public/` and update the paths in the data files.

## Future Improvements

- Connect the reservation form to a backend or form service
- Add a mobile navigation menu
- Add a cart or order feature
- Add dark mode

## License

This project was built for learning purposes.