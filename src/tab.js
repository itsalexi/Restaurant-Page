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

function renderHomeTab() {
  const tab = document.querySelector(".tab");
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
