const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let current = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    if (value === "AC") {
      current = "";
      display.textContent = "0";
    } else if (value === "DEL") {
      current = current.slice(0, -1);
      display.textContent = current || "0";
    } else if (value === "=") {
      try {
        current = eval(current).toString();
        display.textContent = current;
      } catch {
        display.textContent = "Hata";
        current = "";
      }
    } else {
      current += value;
      display.textContent = current;
    }
  });
});
