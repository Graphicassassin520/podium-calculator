// script.js

// Update the display value of sliders
function updateValue(id, value) {
  document.getElementById(id).innerText = id === "cost-value" ? `$${value}` : value;
}

// Calculate the total vacation cost
function calculate() {
  const nights = parseInt(document.getElementById("nights-per-year").value);
  const costPerNight = parseInt(document.getElementById("cost-per-night").value);
  const years = parseInt(document.getElementById("years-planning").value);
  const inflationRate = parseFloat(document.getElementById("inflation-rate").value) / 100;

  let totalCost = nights * costPerNight * years;
  if (inflationRate > 0) {
    totalCost *= Math.pow(1 + inflationRate, years);
  }

  const formattedCost = `$${totalCost.toFixed(2)}`;
  document.getElementById("hotel-cost-circle").innerText = formattedCost;
  document.getElementById("condo-cost-circle").innerText = formattedCost;
}

// Reset all inputs and the result
function reset() {
  document.getElementById("nights-per-year").value = 0;
  document.getElementById("cost-per-night").value = 0;
  document.getElementById("years-planning").value = 0;
  document.getElementById("inflation-rate").value = 0;

  updateValue("nights-value", 0);
  updateValue("cost-value", 0);
  updateValue("years-value", 0);

  document.getElementById("hotel-cost-circle").innerText = "$0";
  document.getElementById("condo-cost-circle").innerText = "$0";
}
