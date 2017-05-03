db.collection('quotes').find().toArray();
var thing = db;
var thing2 = thing.collection('quotes');
var thing3 = thing2.find();
var thing4 = thing3.toArray();

// are the same type
console.log(Object.typeOf(thingx));
console.log(Object.typeOf(thing[x-1].funciton[x-1]));
console.log(Object.typeOf(/*return type of function[x-1]*/));

peter () { return 5};
// the following 2 lines are equivalent
patrick = peter();
patrick = 5;