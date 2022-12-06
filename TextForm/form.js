// change Text Color
var colorPicker = document.getElementById("textColor");
colorPicker.addEventListener("input", updateTextColor, false);

function updateTextColor(event) {
  document.getElementById("name").style.color = event.target.value;
}

// change background color
var colorPicker = document.getElementById("backgroundColor");
colorPicker.addEventListener("input", updateBgColor, false);

function updateBgColor(event) {
  document.getElementById("name").style.backgroundColor = event.target.value;
}

//function for change front size 
function changeSize() {
  const name = document.getElementById('name');
  const size = document.getElementById('size').value;
  name.style.fontSize = size + "px";
}

//function for the text display in different fonts
function changeFont(obj) {
  const name = document.getElementById('name');
  name.style.fontFamily = obj.value;

}
function reset() {
  document.getElementById('textColor').value=null;
  document.getElementById('input').value=null;
  resetname.style.backgroundColor = null;
  document.getElementById("nameField").value= null;
  document.getElementById('radio').checked = false;
  document.getElementById('backgroundColor').value = null;
  document.getElementById('textColor').value = null;
  document.getElementById('size').value = null;
}