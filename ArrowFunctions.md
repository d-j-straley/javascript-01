Here are some examples of how to write JavaScript arrow functions:



This one has no arguments to the non-arrow function:

<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>

<p>This example shows the syntax of a non-arrow function.</p>

<p id="demo"></p>

<script>
let hello = "";

hello = function() {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();
</script>

</body>
</html>






This examples shows the syntax of an arrow function with no arguments:


<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>The Arrow Function</h2>

<p>This example shows the syntax of an Arrow Function, and how to use it.</p>

<p id="demo"></p>

<script>
let hello = "";

hello = () => {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();
</script>

</body>
</html>





This is a non-arrow function with one argument to the function:


<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>

<p id="demo"></p>

<script>
let hello = "";

hello = function(name) {
  return name + ", Hello again World!";
}

document.getElementById("demo").innerHTML = hello("David");
</script>

</body>
</html>


The following arrow fnction takes one parameter and there are 2 versions of it below.
The first one is the full, longer version.
The second one is for the special case where there is only one line.  You can 
skip putting in the curly braces and the "return" statement.


<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>The Arrow Function</h2>

<p>This example shows the syntax of an Arrow Function with one parameter, and how to use it.</p>

<p id="demo"></p>

<script>

// hello = (msg) => {
//   return msg + ", Hello World!";
// }

hello = (msg) => msg + ", Hello World!";

document.getElementById("demo").innerHTML = hello("Dave");
</script>

</body>
</html>


In my estimation, these arrow functions accomplish very little.
They do seem to be effective in obfuscating the code, but other than that they only "save" a few keystrokes.  Worse yet, if you get to their most-terse form, whereby there is only one line of code in the function, if you go with the minimal form, which excludes the "return" statement and the curly braces, you are making your code to be less "extensible" in that if you later wanted to add a 2nd line of code, you'd *then* have to resort to using the "return" statement and curly braces again.

so the following minimal line of code:

```javascript
hello = name => "Hello World " + name;
document.getElementById("demo").innerHTML = hello("Tess");
```

would have to be expanded to look like:

```javascript
hello = (name) => 
{
  let first = "Cindy";
  let last = "Smith";
  return "Hello World " 
  + first + " " + last + " and " + name;
}

document.getElementById("demo").innerHTML = hello("Barbie");
```


But even this is not a big savings in any way, because this is not any big advancement over just writing a function the normal way, which could look like this:


```javascript
function hello2(name) 
{
  let first = "Cindy";
  let last = "Smith";
  return "Hello World " 
  + first + " " + last + " and " + name;  
}

document.getElementById("demo").innerHTML = hello2("Carol");
```


Here's an example using an anonymous function:

 Here's the original code:

<!DOCTYPE html>
<html>
<body style="text-align: right">

<h1>JavaScript Functions</h1>
<h2>Callback Functions</h2>
<p id="demo"></p>

<script>
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
</script>

</body>
</html>





 Here is my modified, expanded code:

 <!DOCTYPE html>
<html>
<body style="text-align: right">

<h1>JavaScript Functions</h1>
<h2>Callback Functions</h2>
<p id="demo"></p>

<script>
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => { return (x >= 0) } );

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
</script>

</body>
</html>
```


Here now is "regular function syntax" (using "function()" ) instead of an arrow syntax so as to create an anonymous function:



Result Size: 668 x 1270
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>setTimeout() with a Callback</h2>

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

<h1 id="demo"></h1>

<script>
setTimeout(function() { myFunction("I love You !!!"); }, 3000);


function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
</script>

</body>
</html>


And now try the same thing using Arrow Syntax:



<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>setTimeout() with a Callback</h2>

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

<h1 id="demo"></h1>

<script>
// setTimeout(function() { myFunction("I love You !!!"); }, 3000);
setTimeout( () => {return (myFunction("I love You !!!"))})

function myFunction(value) 
{
  document.getElementById("demo").innerHTML = value;
}
</script>

</body>
</html>