var inputString = "";
var result;
function inputNumber(n) {
  inputString +=n;
  document.getElementById("Result").value = inputString;


}
function calculation(){
  result = eval(inputString);
  document.getElementById('Result').value = result;

}
function clear(){
  document.getElementById("Result").value = "";
}
