/*
<input type="text" onblur="myFunction()">

<input type="text" onfocus="focusFunction()" onblur="blurFunction()">



<form id="myForm">
  <input type="text" id="myInput">
</form>

<script>
var x = document.getElementById("myForm");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
  document.getElementById("myInput").style.backgroundColor = "yellow";
}

function myBlurFunction() {
  document.getElementById("myInput").style.backgroundColor = "";
}
</script>





<form id="myForm">
  <input type="text" id="myInput">
</form>

<script>
var x = document.getElementById("myForm");
x.addEventListener("focusin", myFocusFunction);
x.addEventListener("focusout", myBlurFunction);

function myFocusFunction() {
  document.getElementById("myInput").style.backgroundColor = "yellow";
}

function myBlurFunction() {
  document.getElementById("myInput").style.backgroundColor = "";
}
</script>
*/