var inputString = "";
var expression = "";
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

function myCalculation(event)
{
  if((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 111))
  {
    expression += event.key;
  }
  if(event.keyCode==13)
  {
    result = eval(expression);
    document.getElementById('Result').value = result;
  }

}
