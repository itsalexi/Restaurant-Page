import {
  renderFooter,
  renderHeader,
  renderMain,
  resetMain,
} from "./pageLoad.js";

import {
  renderHomeTab,
  renderMenuTab,
  renderAboutTab,
  renderTab,
} from "./tab.js";

import { createFood } from "./menu.js";

createFood("Hamburger", "10", "It's a hamburger, deal with it.");
createFood("Tempura", "10", "Tempura is good, buy it! It's a great food item.");
createFood(
  "Steak",
  "10",
  "Good steak, good meats, cooked in any style you want."
);
createFood("Tonkatsu", "10", "Tonkatsu, no need to explain, its good food.");

// These should be loaded first and in order.
renderHeader();
renderMain();
renderFooter();

// resetMain();
const headerItems = document.querySelectorAll(".headerItem");

headerItems.forEach((item) => {
  item.addEventListener("click", function tabSwitcher(event) {
    switch (event.target.id) {
      case "home":
        resetMain();
        break;
      case "menu":
        resetMain();
        renderMenuTab();
        break;
      case "about":
        resetMain();
        break;
    }
  });
});

// When switching tabs, call the resetMain() function to reset main-content div
// Then call the tab function of whatever the person pressed on.
