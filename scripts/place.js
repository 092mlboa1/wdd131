const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modified: ${document.lastModified}`;

document.getElementById("temperature").textContent = temperature;
document.getElementById("windSpeed").textContent = windSpeed;
document.getElementById("windChill").textContent = temperature <= 10 && windSpeed > 4.8
  ? `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`
  : "N/A";
