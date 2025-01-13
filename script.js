// Function to calculate and transition to results page
function calculate() {
  const nights = parseInt(document.getElementById("nights-per-year").value) || 0;
  const cost = parseInt(document.getElementById("cost-per-night").value) || 0;
  const years = parseInt(document.getElementById("years-planning").value) || 0;
  const inflation = parseFloat(document.getElementById("inflation-rate").value) / 100 || 0;

  let total = nights * cost * years;
  if (inflation > 0) total *= Math.pow(1 + inflation, years);

  // Update results page
  document.getElementById("summary-nights").innerText = nights;
  document.getElementById("summary-cost").innerText = formatNumber(cost);
  document.getElementById("summary-years").innerText = years;
  document.getElementById("summary-inflation").innerText = (inflation * 100).toFixed(2) + "%";
  document.getElementById("total-cost-value").innerText = `$${formatNumber(total.toFixed(2))}`;
}

// Reset all input values
function reset() {
  document.getElementById("nights-per-year").value = 0;
  document.getElementById("cost-per-night").value = 0;
  document.getElementById("years-planning").value = 0;
  document.getElementById("inflation-rate").value = 0;
}

// Format numbers with commas
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to go back to the input screen
function goBack() {
  window.history.back();
}
