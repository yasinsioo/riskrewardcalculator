"use strict";
document.querySelector("#tip-form").onchange = function () {
  var profitValue;
  var totalBalance;
  var balance = Number(document.getElementById("billTotal").value);
  var rrRatio = Number(document.getElementById("rr").value);
  var oneR = Number(document.getElementById("oneR").value);
  var winRate = document.getElementById("winrate").value;

  document.getElementById("winrateOutput").innerHTML = winRate + "%"; // Winrate output %

  profitValue = (100 - (100 - winRate)) * rrRatio * oneR;
  totalBalance = profitValue + balance;
  document.getElementById("profit").innerHTML = "Profit: " + profitValue;
  document.getElementById("totalBalance").innerHTML =
    "Total balance: " + totalBalance;
  document.getElementById("results").style.display = "block";
};
