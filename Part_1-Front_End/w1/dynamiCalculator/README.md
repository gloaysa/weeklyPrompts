# Project A: Dynamic Calculator

[![Elium Academy](http://www.zoomby.es/img/Elium-Logo-200-px-Black-PNG.png)](http://www.elium.academy)

### Prompt

> You’re a lazy math student that have to make a lot of operations through the day.  Write a program that does those operations for you.

---

#### This project contains two items:

1. **Operation objects**: An operation object is an object containing a function.

  * Properties:
    - Name: a string that describes what the operation does.
    - Args: the number of arguments this operation takes.
  * Methods:
    - Operation: a function that does the math with, it will contain:
        + args: the arguments that the function takes. It's variable, up to you.
        + return: the result of the math you made it do.

   Behavior: it executes the formula indicated in the 'name' property.

2. **dynamiCalculator function**: the function that will be called to operate the objects.

  * Arguments:
    - op: an operation object.
    - a, b, c: Numbers to be operated on. Each operation object will use as many of them as it needs.
  * Return values:
    - a number: The result of sending the arguments through op.operation().

  Behavior: dynamicCalculator will pass (a), (a,b), or (a,b,c) into ‘op.operation’’ depending on the value of ‘op.args’ and return the value of the function call.

---

### Usage example

The idea is that when dynamicCalculator is called with an operation object and numbers as arguments, it will operate the function inside the operation object. Since the operation functions return the result, it could be stored in a new variable.


 * Sample inputs and outputs:
   - **Operation object**:  
 `:{name: 'subtract', args: 2, operation: function(a, b){return a - b}}`  
  `:{name: 'square', args: 1, operation: function(a){return a * a}}`  
  `:{name: 'sum3', args: 3, operation: function(a, b, c){return a + b + c}}`  

	- **Dynamic calculator**:  
	`var result = dynCalc(subtract, 4, 3); //-> 1 `  
	`var result = dynCalc(square, 6, 7); //-> 36 `  
	`var result = dynCalc(sum3, 1, 2); //-> NaN `  

---

### Challenge

Remove the arguments 'a, b, c' from your calculator.  Use the builtin javascript '[arguments](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments)' feature to dynamically access any number of arguments.   

Make you calculator a method in a new object and give that object a property called 'operations' and is an array.  
Next give the calculator a method that adds new operations objects to the ‘dynamicCalculator.operations’ array.  
Finally create a method that takes the name of an operation and numbers.  It will find the operation by that name and execute it with the numbers.  

---

### The exercises it combines

Fill this once the exercises are made.
