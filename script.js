const inputValue = document.querySelector("#input");
const outputValue = document.querySelector("#output");
const resultBtn = document.querySelector("#resultBtn");



const isValidJson =(json)=>{
 try {
    JSON.parse(json);
  } catch (e) {
    return false;
  }
return true;
}


const responseFormat = () => {
  
  if(!isValidJson(inputValue.value)) return alert("Invalid JSON format")

  const json = [JSON.parse(inputValue.value)].flat();

  let response = {};
  keys = Object.keys(json[0]);
  let values = Object.values(json[0]);
  for (let index = 0; index < keys.length; index++)
    response[`${keys[index]}`] = Array.isArray(values[index])
      ? "array"
      : values[index] == null ? null : typeof values[index];

  outputValue.value = JSON.stringify(response, null, 4);
};




const element = document.getElementById("resultBtn");
element.addEventListener("click", responseFormat);
