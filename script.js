// Update the display value of sliders
function updateValue(id, value) {
  document.getElementById(id).innerText = id === "cost-value" ? `$${value}` : value;
}

// Calculate the total vacation cost and transition to the result screen
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

  // Update the summary section
  document.getElementById("summary-nights").innerText = nights;
  document.getElementById("summary-cost").innerText = costPerNight;
  document.getElementById("summary-years").innerText = years;
  document.getElementById("summary-inflation").innerText = (inflationRate * 100).toFixed(2) + "%";

  // Transition screens
  document.getElementById("calculator-screen").classList.remove("active");
  document.getElementById("result-screen").classList.add("active");
}

// Reset the inputs and results
function reset() {
  document.getElementById("nights-per-year").value = 0;
  document.getElementById("cost-per-night").value = 0;
  document.getElementById("years-planning").value = 0;
  document.getElementById("inflation-rate").value = 0;

  updateValue("nights-value", 0);
  updateValue("cost-value", 0);
  updateValue("years-value", 0);
}

// Go back to the calculator screen
function goBack() {
  document.getElementById("result-screen").classList.remove("active");
  document.getElementById("calculator-screen").classList.add("active");
}

// Initialize the calculator screen
document.getElementById("calculator-screen").classList.add("active");
