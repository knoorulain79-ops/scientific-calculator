const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  if (display.value) {
    display.value = eval(display.value) * -1;
  }
}

/* Scientific functions */
function sin(x) {
  return Math.sin(x * Math.PI / 180);
}

function cos(x) {
  return Math.cos(x * Math.PI / 180);
}

function tan(x) {
  return Math.tan(x * Math.PI / 180);
}

function log(x) {
  return Math.log10(x);
}

function ln(x) {
  return Math.log(x);
}

function factorial() {
  let num = parseInt(display.value);
  if (num < 0 || isNaN(num)) {
    display.value = "Error";
    return;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  display.value = result;
}
