const inputValue = document.querySelector("#input");
const outputValue = document.querySelector("#output");
const resultBtn = document.querySelector("#resultBtn");

const responseFormat = () => {
  const json = JSON.parse(inputValue.value);

  debugger

  let response = {};
  let keys = Object.keys(json[0]);
  let values = Object.values(json[0]);
  for (let index = 0; index < keys.length; index++)
    response[`${keys[index]}`] = Array.isArray(values[index])
      ? "array"
      : typeof values[index];

  outputValue.value = JSON.stringify(response, null, 4);
};


debugger

const element = document.getElementById("resultBtn");
element.addEventListener("click", responseFormat);
