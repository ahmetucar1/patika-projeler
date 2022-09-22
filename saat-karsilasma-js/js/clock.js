
let userName = prompt("isminizi yazınız.");
let myName = document.querySelector("#myName")


myName.innerHTML = `${userName ? userName : "anonymous"}`
document.getElementById("myName").style.color = "#E67E22"

 let saatBilgisi = document.querySelector("div#myClock")
 const d = new Date();
 let hour = d.getHours();

 if (d){saatBilgisi.innerHTML= d}
 else if (hour) {saatBilgisi.innerHTML = hour}
 else{saatBilgisi.innerHTML="saat bilgisi yok"};

