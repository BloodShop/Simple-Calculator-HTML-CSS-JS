function clearBoard(val) {
  if(val == "AC")
  {
    document.getElementById('num1').innerHTML = '';
    document.getElementById('num2').innerHTML = '';
    document.getElementById('operation1').innerHTML = '';
  }
}

function deleteDigit() {
  let num1 = document.getElementById('num1').innerHTML;
  let num2 = document.getElementById('num2').innerHTML;
  let oper = document.getElementById('operation1').innerHTML;

  if(num2 != '') {
    document.getElementById('num2').innerHTML = num2.slice(0, -1);
  }
  else if(oper != '') {
    document.getElementById('operation1').innerHTML = '';
  }
  else {
    document.getElementById('num1').innerHTML = num1.slice(0, -1);
  }
}

function addOperation(oper) {
  document.getElementById('operation1').innerHTML = oper;
}

function addNumber(digit) {
  if(document.getElementById('operation1').innerHTML == '') {
    if(document.getElementById('num1').innerHTML.toString() == NaN.toString() || document.getElementById('num1').innerHTML.toString() == Infinity.toString()) {
      document.getElementById('num1').innerHTML = digit
    }
    else if(digit == '.' && document.getElementById('num1').innerHTML.includes('.')) {
      return
    }
    else document.getElementById('num1').innerHTML += digit;
  }
  else {
    if(digit == '.' && document.getElementById('num2').innerHTML.includes('.')) {
      return
    }
    else document.getElementById('num2').innerHTML += digit
  }
}

function equallity() {
  if (document.getElementById('num2').innerHTML == '') return;
  let first = +document.getElementById('num1').innerHTML;
  let second = +document.getElementById('num2').innerHTML;
  var oper = document.getElementById('operation1').innerHTML;
  // if(typeof first === isNaN || typeof first === isFinite) clearBoard();
  let result = GetResult(first, second, oper);
  document.getElementById('num1').innerHTML = result;
  document.getElementById('num2').innerHTML = '';
  document.getElementById('operation1').innerHTML = '';
  console.log(result);
  return;
}

function GetResult(num1,num2,oper) {
  switch(oper){
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    case '*':
      return num1 * num2;
  }
}