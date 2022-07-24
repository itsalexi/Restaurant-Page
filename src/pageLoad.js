// Load the Header and Footer on page load
// For main-content, when buttons at the top are clicked
// Clear main-content
// Call the tab function (Home, Menu, About)

// Generate the content for each tab
const container = document.getElementById("content");

function renderHeader() {
  const header = document.createElement("div");
  container.appendChild(header);
  header.classList.add("header");

  const headerList = document.createElement("ul");

  header.appendChild(headerList);

  const homeItem = document.createElement("li");
  const menuItem = document.createElement("li");
  const aboutItem = document.createElement("li");

  headerList.appendChild(homeItem);
  headerList.appendChild(menuItem);
  headerList.appendChild(aboutItem);

  homeItem.textContent = "HOME";
  menuItem.textContent = "MENU";
  aboutItem.textContent = "ABOUT";
}

function renderFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  container.appendChild(footer);

  const githubText = document.createElement("p");
  const odinText = document.createElement("p");
  footer.appendChild(githubText);
  footer.appendChild(odinText);

  githubText.innerHTML =
    "Created by <a href='https://github.com/itsalexi'>Alexi</a>";
  githubText.classList.add("footerText");

  odinText.innerHTML =
    "Built for <a href='https://theodinproject.com'>The Odin Project</a> ❤️";
}

function renderMain() {
  const maincontent = document.createElement("div");
  maincontent.classList.add("main-content");

  container.append(maincontent);
}

function resetMain() {
  const main = document.querySelector(".main-content");
  main.innerHTML = "";
}

export { renderHeader, renderFooter, renderMain, resetMain };
