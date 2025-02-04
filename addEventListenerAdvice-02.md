Note that the following works because *no parameters are explicitly passed to the functions*.
This is why I am able to list the function name alone in the "addEventListener" call.
Otherwise, if there were parameters to pass, I'd either have to use an *arrow function* to add
the function name to the "addEventListener" call or I'd have to create an *anonymous function*  
so as to call the function from "addEventListener".  Also, alternatively, I could directly hook
up the function (with any explicit parameters needed) to the buttons using and "onclick" handler
of HTML instead of an "addEventListener" call against the HTML element.


<!DOCTYPE html>
<html>
<body>

<h2>JavaScript addEventListener()</h2>

<p>This example uses the addEventListener() method to add many events on the same button.</p>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}
</script>

</body>
</html>
