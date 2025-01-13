function switchScreen(hideId, showId) {
  const hideScreen = document.getElementById(hideId);
  const showScreen = document.getElementById(showId);

  hideScreen.classList.remove("active");
  setTimeout(() => {
    hideScreen.style.visibility = "hidden";
    showScreen.style.visibility = "visible";
    showScreen.classList.add("active");
  }, 500);
}

function calculate() {
  const nights = parseInt(document.getElementById("nights-per-year").value) || 0;
  const cost = parseInt(document.getElementById("cost-per-night").value) || 0;
  const years = parseInt(document.getElementById("years-planning").value) || 0;
  const inflation = parseFloat(document.getElementById("inflation-rate").value) / 100 || 0;

  let total = nights * cost * years;
  if (inflation > 0) total *= Math.pow(1 + inflation, years);

  document.getElementById("summary-nights").innerText = nights;
  document.getElementById("summary-cost").innerText = formatNumber(cost);
  document.getElementById("summary-years").innerText = years;
  document.getElementById("summary-inflation").innerText = `${(inflation * 100).toFixed(2)}%`;
  document.getElementById("total-cost-value").innerText = `$${formatNumber(total.toFixed(2))}`;

  switchScreen("calculator-screen", "result-screen");
}

function reset() {
  document.getElementById("nights-per-year").value = 0;
  document.getElementById("cost-per-night").value = 0;
  document.getElementById("years-planning").value = 0;
  document.getElementById("inflation-rate").value = 0;
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function goBack() {
  switchScreen("result-screen", "calculator-screen");
}
