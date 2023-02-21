const calculateTemperature = () => {
  const deg = degree.value;
  if (deg.length == 0) {
    alert("Please fill out the field!");
    return false;
  }
  const from = document.getElementById("from");
  const to = document.getElementById("to");

  const fromPos = from.options[from.selectedIndex].value;
  const toPos = to.options[to.selectedIndex].value;

  console.log(deg);
  console.log(fromPos);
  console.log(toPos);
  result(deg, fromPos, toPos);
};

/* Celcius Converter */

const c2f = (c) => {
  let x = (parseFloat(c) * 9) / 5 + 32;
  let y = parseFloat(x.toFixed(4));
  return y;
};

const c2k = (c) => {
  let x = parseFloat(c) + 273.15;
  let y = parseFloat(x.toFixed(4));
  return y;
};

const c2r = (c) => {
  let x = (parseFloat(c) * 9) / 5 + 491.67;
  let y = parseFloat(x.toFixed(4));
  return y;
};

/* Fahrenheit Converter */

const f2c = (f) => {
  let x = ((parseFloat(f) - 32) * 5) / 9;
  let y = parseFloat(x.toFixed(4));
  return y;
};

const f2k = (f) => {
  let x = ((parseFloat(f) + 459.67) * 5) / 9;
  let y = parseFloat(x.toFixed(4));
  return y;
};

const f2r = (f) => {
  let x = parseFloat(f) + 459.67;
  let y = parseFloat(x.toFixed(4));
  return y;
};

/* Kelvin Converter */

const k2c = (k) => {
  let x = parseFloat(k) - 273.15;
  let y = parseFloat(x.toFixed(4));
  return y;
};

const k2f = (k) => {
  let x = (parseFloat(k) * 9) / 5 - 459.67;
  let y = parseFloat(x.toFixed(4));
  return y;
};

const k2r = (k) => {
  let x = (parseFloat(k) * 9) / 5;
  let y = parseFloat(x.toFixed(4));
  return y;
};

/* Rankine Converter */

const r2c = (r) => {
  let x = (parseFloat(r) * 5) / 9 - 273.15;
  let y = parseFloat(x.toFixed(4));
  return y;
};

const r2f = (r) => {
  let x = parseFloat(r) - 459.67;
  let y = parseFloat(x.toFixed(4));
  return y;
};

const r2k = (k) => {
  let x = (parseFloat(k) * 5) / 9;
  let y = parseFloat(x.toFixed(4));
  return y;
};

/* Result */

const result = (deg, fp, tp) => {
  if (fp == "celsius" && tp == "fahrenheit") {
    res.textContent = `${deg} (°C) = ${c2f(deg)} (°F)`;
  } else if (fp == "celsius" && tp == "kelvin") {
    res.textContent = `${deg} (°C) = ${c2k(deg)} (K)`;
  } else if (fp == "celsius" && tp == "rankine") {
    res.textContent = `${deg} (°C) = ${c2r(deg)} (°R)`;
  } else if (fp == "fahrenheit" && tp == "celsius") {
    res.textContent = `${deg} (°F) = ${f2c(deg)} (°C)`;
  } else if (fp == "fahrenheit" && tp == "kelvin") {
    res.textContent = `${deg} (°F) = ${f2k(deg)} (K)`;
  } else if (fp == "fahrenheit" && tp == "rankine") {
    res.textContent = `${deg} (°F) = ${f2r(deg)} (°R)`;
  } else if (fp == "kelvin" && tp == "celsius") {
    res.textContent = `${deg} (K) = ${k2c(deg)} (°C)`;
  } else if (fp == "kelvin" && tp == "fahrenheit") {
    res.textContent = `${deg} (K) = ${k2f(deg)} (°F)`;
  } else if (fp == "kelvin" && tp == "rankine") {
    res.textContent = `${deg} (K) = ${k2r(deg)} (°R)`;
  } else if (fp == "rankine" && tp == "celsius") {
    res.textContent = `${deg} (°R) = ${r2c(deg)} (°C)`;
  } else if (fp == "rankine" && tp == "fahrenheit") {
    res.textContent = `${deg} (°R) = ${r2f(deg)} (°F)`;
  } else if (fp == "rankine" && tp == "kelvin") {
    res.textContent = `${deg} (°R) = ${r2k(deg)} (K)`;
  }
};

/* Main.. */

const convert = document.getElementById("convert");
const res = document.getElementById("resultContainer");
const degree = document.getElementById("degree");

/* Call */

convert.addEventListener("click", () => {
  calculateTemperature();
});
