// ==========================
// Rajib Gold Dashboard v4
// ==========================

// <<< Replace only this line >>>
const API_KEY = "ee4e806a046c448181863707882b884e";

// Gold
async function getGold() {
    try {
        const res = await fetch(`https://api.twelvedata.com/price?symbol=XAU%2FUSD&apikey=${API_KEY}`);
        );

        const data = await res.json();

        if (data.price) {
            document.getElementById("gold").innerHTML =
                Number(data.price).toFixed(2);
        } else {
            document.getElementById("gold").innerHTML = "N/A";
        }
    } catch (e) {
        document.getElementById("gold").innerHTML = "Error";
    }
}

// DXY
async function getDXY() {
    try {

        const res = await fetch(
            "https://api.allorigins.win/raw?url=https://stooq.com/q/l/?s=dx.f&f=sd2t2ohlcv&h&e=csv"
        );

        const txt = await res.text();

        const lines = txt.trim().split("\n");

        if (lines.length > 1) {

            const cols = lines[1].split(",");

            document.getElementById("dxy").innerHTML = cols[6];

        } else {

            document.getElementById("dxy").innerHTML = "N/A";

        }

    } catch (e) {

        document.getElementById("dxy").innerHTML = "N/A";

    }
}

// Dashboard Refresh
async function updateDashboard() {

    await getGold();

    await getDXY();

}

updateDashboard();

setInterval(updateDashboard, 30000);
