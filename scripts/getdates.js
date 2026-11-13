const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

function updateDateTime() {
  const now = new Date();
  currentYear.textContent = now.getFullYear();
  lastModified.textContent = `Current date and time: ${now.toLocaleString()}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
