# Project B: Schematized Calculator

[![Elium Academy](http://www.zoomby.es/img/Elium-Logo-200-px-Black-PNG.png)](http://www.elium.academy)


### Prompt

> You're a clever accountant that want to create and store yours operation objects just once, based in an schema, to operate them later on when need it. You'll also want to reset the scheme, because the life is rich in problems.

---

#### This project contains 1 object, that contains 5 objects inside:  

1. **schemaCalc**: Is the main object, containing all the objects, arrays and functions within.  
   1. operations: an array or object that contains operation objects.  
   2. schema: an object used for validating new operation objects.  
   3. addTo: a function that adds new objects to 'operations'. Contains:  
		- args: an operation object.  
		- returns: a success or failure message.  
Behavior: uses 'schema' to validate new operation objects before adding them to 'operations' if they are valid.  
   4. operate: a function that operates the operation objects inside 'operations'. It contains:  
  		- args: a string indicating the operation to be used and the numbers to be operated on.  
  		- returns: an array containing a success/failure message and the result of the operation. If the operation was a failure, return 'undefined' as the result.  
Behavior: Searches for an operation with the name passed in. If it exists, execute the operation on the arguments. If not, it say so.  
   5. changeSchema: a function that changes the squema. It contains:  
		- args: a new schema object.  
		- returns: a success/failure message.  
Behavior: change the schema object for the argument.  

---

### Usage example

The idea of this project is to make an object capable of create and store new objects based in a schema, to operate with them later on. If needed, the schema can be modified.

 * Sample function's inputs and outputs:  

 **addTo()**  

```javascript
schemaCalc.addTo({
    name: {type: "sum"},
    numArgs: {type: 2},
    operation: {type: function(a, b){return a + b}}
  });
  //-> success!
```
**operate()**  

```javascript
schemaCalc.operate("sum", 1, 2);
//-> 3
```
**changeSchema()**  

```javascript
schemaCalc.changeSchema({
    name: {value: "sum", does: "Add up to 3 numbers"},
    numArgs: {value: 3, does: "Give the numbers of args that operation takes"},
    operation: {value: function(a, b, c = 0){return a + b + c}}
  });
  //-> success!
```

---

### Challenge

1. If 'operate' is called with an operation name that doesn't exist, create a new one with that name and give it a default operation and arguments.  
2. If the wrong numbers of arguments where passed it, prompt the user for new ones, then use them on the operation that was originally called.    
3. Give your calculator a memory.  Someone can use it by typing 'x+y, enter, +z, enter, clear'.  Like normal calculators.  

---

### The exercises it combines

[dynamiCalculator](https://github.com/gloaysa/demoPorfolio/tree/prompt-style/ph1-nonode/ph1w1/dynamiCalculator)  |  [schematizer](https://github.com/gloaysa/demoPorfolio/tree/prompt-style/ph1-nonode/ph1w1/schematizer)
