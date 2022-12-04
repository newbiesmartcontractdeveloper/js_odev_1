let name = prompt("Lütfen adınızı giriniz","Ahmet, Ayşe,..");

let greeting = document.querySelector("#myName")

greeting.innerHTML = `${greeting.innerHTML} ${name}`;
