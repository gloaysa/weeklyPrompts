// focus on functions, programatization, abstracter stuff

// declare functions as object literals
var sum2 = {name: 'sum2', args: 2, operation: function(a, b){return a + b}};
var sum3 = {name: 'sum3', args: 3, operation: function(a, b, c){return a + b + c}};
var	subtract = {name: 'subtract', args: 2, operation: function(a, b){return a - b}};
var square =  {name: 'square', args: 1, operation: function(a){return a * a}};
var multiply = {name: 'multiply', args: 2, operation: function(a, b){return a * b}};


var dynCalc = function(op, a, b, c) {
	return op.operation(a, b, c);
}

console.log("\n3 + 4 = 7:");
console.log('drumroll ...   ' + dynCalc(sum2, 3, 4));
console.log("\n3 + 4 + 1 = 8:");
console.log('drumroll ...   ' + dynCalc(sum3, 3, 4, 1));
console.log("\n3 - 1 = 2:");
console.log('drumroll ...   ' + dynCalc(subtract, 3, 1));
console.log("\n3^2 = 9:");
console.log('drumroll ...   ' + dynCalc(square, 3));
console.log("\n3 * 4 = 12:");
console.log('drumroll ...   ' + dynCalc(multiply, 3, 4));