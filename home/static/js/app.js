const today  = new Date();
    days = ["日","月","火","水","木","金","土"];

const day = today.getDay();

let outputText = (today.getMonth() + 1) + "月";
outputText += today.getDate() + "日";
outputText +=  days[today.getDay()] + "曜日";

document.getElementById("date").textContent = outputText; 
