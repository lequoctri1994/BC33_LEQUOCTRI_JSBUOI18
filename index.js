var exArr = [];

function addNumb() {
  var numb = +document.getElementById("addArray").value;
  exArr.push(numb);

  document.getElementById("showArr").innerHTML = exArr;
}

function ex1() {
  var sum = 0;
  for (var i = 0; i <= exArr.length - 1; i++) {
    if (exArr[i] >= 0) {
      sum += exArr[i];
    } else {
      continue;
    }
    document.getElementById("ex1").innerHTML = sum;
  }
}

function ex2() {
  var total = 0;
  for (var i = 0; i <= exArr.length - 1; i++) {
    if (exArr[i] >= 0) {
      total += 1;
    } else {
      continue;
    }
  }
  document.getElementById("ex2").innerHTML = total;
}

function ex3() {
  var min = exArr[0];
  for (var i = 0; i <= exArr.length - 1; i++) {
    if (exArr[i] < min) {
      min = exArr[i];
    }
  }
  document.getElementById("ex3").innerHTML = min;
}

function ex4() {
  var postMin = exArr[0];
  for (var i = 0; i <= exArr.length - 1; i++) {
    if (exArr[i] < postMin && exArr[i] >= 0) {
      postMin = exArr[i];
    }
  }
  document.getElementById("ex4").innerHTML = postMin;
}

function ex5() {
  var lastEven = "";
  for (var i = exArr.length; i >= 0; i--) {
    if (exArr[i] % 2 === 0) {
      lastEven = exArr[i];
      break;
    }
  }
  document.getElementById("ex5").innerHTML = lastEven;
}

function ex6() {
  var local1 = +document.getElementById("first").value;
  var local2 = +document.getElementById("second").value;
  var changeLocal = 0;
  if (local1 != local2) {
    changeLocal = exArr[local1];
    exArr[local1] = exArr[local2];
    exArr[local2] = changeLocal;

    console.log(exArr);
  }
  document.getElementById("ex6").innerHTML = exArr;
}

function ex7() {
  for (var k = 0; k < exArr.length - 1; k++) {
    for (var i = 0; i < exArr.length - 1; i++) {
      if (exArr[i] > exArr[i + 1]) {
        var temp = exArr[i];
        exArr[i] = exArr[i + 1];
        exArr[i + 1] = temp;
      }
    }
  }

  document.getElementById("ex7").innerHTML = exArr;
}

function ex8() {
  debugger;
  for (var i = 0; i < exArr.length; i++) {
    if (exArr[i] === 2 || exArr[i] === 3) {
      break;
    } else if(exArr[i] >= 1 &&
      exArr[i] % 2 != 0 &&
      exArr[i] % 3 != 0 &&
      exArr[i] % 5 != 0) {
      break;
    }
  }
  document.getElementById("ex8").innerHTML = exArr[i];
}

var ex9Arr = [];
function AddArrEx9() {
  var numb = +document.getElementById("addArrayEx9").value;
  ex9Arr.push(numb);

  document.getElementById("showArrEx9").innerHTML = ex9Arr;
}

function ex9 () {
  var numb = ex9Arr;
  var res = "";
  res = numb + (Number.isInteger)

  document.getElementById("ex9").innerHTML = res;
}

function ex10() {
  var num1 = 0;
  var num2 = 0;
  var compare = "";

  for (var i = 0; i < exArr.length; i++) {
    if (exArr[i] < 0) {
      num1++;
    }  else if (exArr[i] > 0) {
      num2++;
    };
  };
  if (num1 > num2) {
    compare = `số lượng số âm > số lượng số dương`
  } else if (num1 < num2) {
    compare = `số lượng số âm < số lượng số dương`
  } else if (num1 = num2) {
    compare = `số lưỢng số âm = số lượng số dương`
  };
  document.getElementById("ex10").innerHTML = compare;
}