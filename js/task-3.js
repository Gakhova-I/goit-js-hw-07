document.getElementById("name-input").addEventListener("input", function () {
  const input = document.getElementById("name-input").value.trim();
  const output = document.getElementById("name-output");
  output.textContent = input ? input : "Anonymous";
});
