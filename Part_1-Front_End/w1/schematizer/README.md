# Project B: Schematizer

[![Elium Academy](http://antwerpstartupfair.be/wp-content/uploads/2017/02/Elium.Academy.png)](http://www.elium.academy)


### Prompt

> You're a lazy teacher and want to make sure students are writing good operations. To do so, you'll write the operations that the students must to write by their own and a function that will compare your operations with the students' ones. 

---

#### This project contains three items:

1. **Operation objects**: As many as you like.

  * Properties:
    - Name: a string that describes what the operation does.
    - Args: the number of arguments this operation takes.
    - Operation: a function that does the math.

   Behavior: it executes the formula indicated in the 'name' property.

2. **Scheme**: An object containing objects with the type and default values.

  * Properties:
		- name: Object.  
 		- numArgs: Object.  
  	- operation: Operation object.  
  		Each of these objects will contain the properties 'type', indicating what kind of value the object contains, and 'fallback', a value to be used if when creating the new object, it doesn't contain that key.

3. **Schema validating function**: A function that compares the object passed with the squema.

  * Arguments:  
		- op: An operation object.  
 		- schema: the schema it must match.  

  * Return values:  
    	- array: containing:  
    			- string: Tells if the match was a success or not. If not, it tells what was wrong with the op.  
    			- op object: It returns the op object passed in. If defaults were needed, it contains those.

  Behavior: Schematizer will take an object and a schema.
  It will compare the object to the expectations of the schema, and return the object with a success/failure message.
  If the object passes but is incomplete, it will be filled with default values.
  If it fails, it is returned whole.

---

### Usage example

The idea is that when schematizer is called with an operation object and the scheme as arguments, it will compare the values inside the new operation object.


 * Sample inputs and outputs:

 ```javascript
: operationSchema, {name: 'subtract', args: 2, operation: function(a, b){return a - b}};
//-> ['all good', {name: 'subtract', args: 2, operation: function(a, b){return a - b}}]
```
```javascript
: operationSchema, {args: 2, operation: function(a, b){return a - b}}
//->['no name, inserted default', {name: 'ackermann', args: 2, operation: function(a, b){return a - b}}]
```
```javascript
: operationSchema, {name: 'subtract', args: 2};
//['no operation, inserted default', {name: 'subtract', args: 2, operation: function(){return '1337FAIL'}}]
```
```javascript
: operationSchema, {name: 'subtract', args: 2, operation: function(a, b){return a - b}, robin: "what's up robin"};
//->  ['does not match schema', {name: 'subtract', args: 2, operation: function(a, b){return a - b}, robin: "what's up robin"}]
```
```	javascript
: operationSchema, {name: 'subtract', operation: function(a, b){return a - b}};
	//->  ['no args specified, booooo', {name: 'subtract', operation: function(a, b){return a - b}}]
```


---

### Challenge

1. Have required and non-required fields.
2. Remeber if an object was valid or not - maybe by storing them in different locations, or adding a property, or anything else you can think of.

---

### The exercises it combines

Fill this once the exercises are made.
