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
  async function getDXY() {
  try {
    const response = await fetch("https://api.allorigins.win/raw?url=https://stooq.com/q/l/?s=dx.f&f=sd2t2ohlcv&h&e=csv");
    const text = await response.text();

    const lines = text.split("\n");
    const cols = lines[1].split(",");

    document.getElementById("dxy").innerHTML = cols[6];
  } catch (e) {
    document.getElementById("dxy").innerHTML = "N/A";
  }
  }
}

updateDashboard();
setInterval(updateDashboard, 30000);
