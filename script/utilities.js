function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue - 1;
}

function getInnerTextById2(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue + 1;
}

function setInnerTextByIdAndValue(id, value) {
  document.getElementById(id).innerText = value;
}

function handleToggle(id) {
  document.getElementById(id).disabled = true;
  alert("Board update Successfully");
}

function congrats(count) {
  if (count == 6) {
    alert("Congrats!!! You have complete all the current Task");
  }
}
