// Update slider values dynamically
function updateValue(id, value) {
  document.getElementById(id).innerText = id === "cost-value" ? `$${formatNumber(value)}` : value;
}

// Format numbers with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Perform calculation and transition to results page
function calculate() {
  const nights = parseInt(document.getElementById("nights-per-year").value);
  const cost = parseInt(document.getElementById("cost-per-night").value);
  const years = parseInt(document.getElementById("years-planning").value);
  const inflation = parseFloat(document.getElementById("inflation-rate").value) / 100;

  let total = nights * cost * years;
  if (inflation > 0) total *= Math.pow(1 + inflation, years);

  // Update results page
  document.getElementById("summary-nights").innerText = nights;
  document.getElementById("summary-cost").innerText = formatNumber(cost);
  document.getElementById("summary-years").innerText = years;
  document.getElementById("summary-inflation").innerText = (inflation * 100).toFixed(2) + "%";
  document.getElementById("hotel-cost-circle").innerText = `$${formatNumber(total.toFixed(2))}`;

  // Switch screens
  document.getElementById("calculator-screen").classList.remove("active");
  document.getElementById("result-screen").classList.add("active");
}

// Reset inputs
function reset() {
  document.getElementById("nights-per-year").value = 0;
  document.getElementById("cost-per-night").value = 0;
  document.getElementById("years-planning").value = 0;
  document.getElementById("inflation-rate").value = 0;

  updateValue("nights-value", 0);
  updateValue("cost-value", 0);
  updateValue("years-value", 0);
}

// Go back to calculator screen
function goBack() {
  document.getElementById("result-screen").classList.remove("active");
  document.getElementById("calculator-screen").classList.add("active");
}
