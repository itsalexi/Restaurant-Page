// TODO
// Create the layout for each Tab
// Home Tab
// Menu Tab
// About Tab
// function renderTab() {
//   const tab = document.createElement("div");
//   tab.classList.add("tab");
//   main_content.appendChild(tab);
// }
import { menuItem } from "./menu.js";
import { resetMain } from "./index.js";

function renderHomeTab() {
  const main_content = document.querySelector(".main-content");

  const title = document.createElement("h1");
  title.classList.add("homeTitle");
  const tagline = document.createElement("p");
  tagline.classList.add("homeTagline");
  const orderBtn = document.createElement("button");
  orderBtn.classList.add("homeOrder");

  orderBtn.addEventListener("click", () => {
    resetMain();
    renderMenuTab();
  });

  const container = document.createElement("div");
  container.classList.add("container");
  container.append(title, tagline, orderBtn);
  main_content.appendChild(container);
  title.textContent = "Restaurant";
  tagline.textContent = "The greatest restaurant there ever is.";
  orderBtn.textContent = "Order Now";
}

function renderMenuTab() {
  const main_content = document.querySelector(".main-content");
  const menu = document.createElement("div");
  menu.classList.add("menu");
  main_content.appendChild(menu);

  for (let item in menuItem) {
    createItem(menuItem[item].name, menuItem[item].price, menuItem[item].desc);
  }
}

function createItem(name, price, desc) {
  const main_content = document.querySelector(".main-content");
  const menu = document.querySelector(".menu");
  const menu_item = document.createElement("div");
  menu_item.classList.add("menu-item");
  const menu_img = document.createElement("img");
  menu_img.classList.add("itemImg");

  const item_content = document.createElement("div");
  const item_title = document.createElement("p");
  const item_price = document.createElement("p");
  const item_desc = document.createElement("p");

  const item_tag = document.createElement("div");
  item_tag.classList.add("item_tag");
  item_tag.appendChild(item_title);
  item_tag.appendChild(item_price);

  menu_img.src = `./img/${name.toLowerCase()}.png`;
  menu_item.appendChild(menu_img);

  menu_item.appendChild(item_content);
  item_content.appendChild(item_tag);
  item_content.appendChild(item_desc);
  item_content.classList.add("item_content");
  item_title.classList.add("item_title");
  item_price.classList.add("item_price");
  item_desc.classList.add("item_content");

  item_title.textContent = name;
  item_desc.textContent = desc;
  item_price.textContent = `$${price}`;

  main_content.appendChild(menu);
  menu.appendChild(menu_item);
}

function renderAboutTab() {
  const tab = document.querySelector(".tab");
}

export { renderHomeTab, renderMenuTab, renderAboutTab };
