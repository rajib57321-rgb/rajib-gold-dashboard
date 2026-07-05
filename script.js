const API_KEY = "YOUR_API_KEY";

async function getQuote(symbol, elementId) {
  try {
    const response = await fetch(
      `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${API_KEY}`
    );
    const data = await response.json();

    const el = document.getElementById(elementId);

    if (data.price) {
      el.innerHTML = data.price;
    } else {
      el.innerHTML = "N/A";
    }
  } catch (e) {
    document.getElementById(elementId).innerHTML = "Error";
  }
}

function updateDashboard() {
  getQuote("XAU/USD", "gold");
  getQuote("DXY", "dxy");
}

updateDashboard();
setInterval(updateDashboard, 30000);
