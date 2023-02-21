const AC = document.getElementById("clear");

AC.addEventListener("click", () => {
  document.getElementById("formula").textContent = "";
  document.getElementById("output").textContent = "0";
});

function dis(a) {
  document.getElementById("formula").textContent += a;
}
