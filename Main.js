var testScore = { 
  name: "",
  math: 0,
  physical: 0,
  chemistry: 0,
};
var i=1;

function myFunction() {
  name = document.getElementById("inputName").value;
  math = document.getElementById("inputMath").value;
  physical = document.getElementById("inputPhysical").value;
  chemistry = document.getElementById("inputChemistry").value;
  if(name == ''){
    alert('Vui lòng nhập tên');
    return;
  }
  else if (math == '') {
    alert('Vui lòng nhập điểm toán');
    return;
  }
  else if (physical == '') {
    alert('Vui lòng nhập điểm lý');
    return;
  }
  else if (chemistry == '') {
    alert('Vui lòng nhập điểm hóa');
    return;
  }
  else if (isNaN(math) || isNaN(physical) || isNaN(chemistry) ) {
    alert('Điểm phải là số');
    return;
  }

  else if ((math > 10 || math <= 0) || (physical > 10  || physical <= 0) ||(chemistry > 10  || chemistry <= 0)) {
    alert('Điểm phải lớn hơn 0 và nhỏ hơn 10');
    return;
  }
  else{
    name = document.getElementById("inputName").value;
    math = document.getElementById("inputMath").value;
    physical = document.getElementById("inputPhysical").value;
    chemistry = document.getElementById("inputChemistry").value;
  }
  var table = document.getElementById("myTable");
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = i++;
  cell2.innerHTML =  name;
  cell3.innerHTML =  math ;
  cell4.innerHTML =  physical ;
  cell5.innerHTML =  chemistry ;
  cell6.innerHTML = '?';
  document.getElementById("inputName").value = "";
  document.getElementById("inputMath").value = "";
  document.getElementById("inputPhysical").value = "";
  document.getElementById("inputChemistry").value = "";
  return; 
}
function aveger() {
  var oTable = document.getElementById('myTable');
  var rowLength = oTable.rows.length;
  for (i = 1; i < rowLength; i++){ 
      var x = document.getElementById("myTable").rows[i].cells;
      var tong= (parseFloat(x[2].innerHTML) +  parseFloat(x[3].innerHTML) + parseFloat(x[4].innerHTML))/3;
      x[5].innerHTML = tong.toFixed(1)
  }
}
function goodStudent() {
  var table = document.getElementById('myTable');
  var rowLength = table.rows.length;
  for (i = 1; i < rowLength; i++){
      x = document.getElementById("myTable").rows[i].cells;
       tong = x[5].innerHTML
      if (tong >=8.0) {
        document.getElementById("myTable").rows[i].style.color='red';
      }
  }
}

