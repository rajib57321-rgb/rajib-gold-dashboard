// Rajib Gold Macro Dashboard v3

const goldEl = document.getElementById("gold");
const dxyEl = document.getElementById("dxy");
const y2El = document.getElementById("y2");
const y10El = document.getElementById("y10");
const y20El = document.getElementById("y20");
const biasEl = document.getElementById("bias");

function random(min,max){
    return (Math.random()*(max-min)+min).toFixed(2);
}

function updateDashboard(){

    // Demo values (replace later with live API)
    goldEl.innerHTML="$"+random(4100,4200);
    dxyEl.innerHTML=random(95,98);

    y2El.innerHTML=random(3.30,3.80)+"%";
    y10El.innerHTML=random(3.80,4.40)+"%";
    y20El.innerHTML=random(4.20,4.80)+"%";

    let score=0;

    if(parseFloat(dxyEl.innerHTML)<96.5) score++;
    if(parseFloat(y10El.innerHTML)<4.10) score++;
    if(parseFloat(y2El.innerHTML)<3.60) score++;

    if(score>=2){
        biasEl.innerHTML="🟢 Bullish";
        biasEl.style.color="#00ff66";
    }else{
        biasEl.innerHTML="🔴 Bearish";
        biasEl.style.color="#ff4444";
    }

}

updateDashboard();

setInterval(updateDashboard,30000);
