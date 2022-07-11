const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

document.getElementById("section-1").onclick = function() {
  
    document.getElementById("section-1").style.display = "none";

}

