const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
const currentDateTime = document.getElementById("currentDateTime");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("primary-navigation");
const filterLinks = document.querySelectorAll(".primary-nav a[data-filter]");
const templeCards = document.querySelectorAll(".temple-card");
const heading = document.querySelector("main h1");

const filterNames = {
  all: "Home",
  old: "Old Temples",
  new: "New Temples",
  large: "Large Temples",
  small: "Small Temples",
};

function updateFooter() {
  const now = new Date();
  currentYear.textContent = now.getFullYear();
  lastModified.textContent = `Last modified: ${document.lastModified}`;
  currentDateTime.textContent = `Current date and time: ${now.toLocaleString()}`;
}

function setFilter(filter) {
  const isEraFilter = filter === "old" || filter === "new";

  templeCards.forEach((card) => {
    const matches = filter === "all"
      || (isEraFilter && card.dataset.era === filter)
      || ((filter === "large" || filter === "small") && card.dataset.size === filter);
    card.hidden = !matches;
  });

  heading.textContent = filterNames[filter] || filterNames.all;
  filterLinks.forEach((link) => {
    if (link.dataset.filter === filter) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  menuToggle.querySelector("span").textContent = isExpanded ? "☰" : "×";
  navigation.hidden = isExpanded;
});

filterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setFilter(link.dataset.filter);
    navigation.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.querySelector("span").textContent = "☰";
  });
});

updateFooter();
setInterval(updateFooter, 1000);
