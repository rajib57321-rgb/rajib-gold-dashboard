const API_KEY = "ee4e806a046c448181863707882b884e";

async function getQuote(symbol, elementId) {
  try {
    const response = await fetch(
      `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${ee4e806a046c448181863707882b884e}`
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
  getQuote("DXY", "DXY");
}

updateDashboard();
setInterval(updateDashboard, 30000);
