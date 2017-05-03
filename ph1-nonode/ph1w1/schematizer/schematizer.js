// focus on ifs, loops, basic tools of logic control


operationSchema = {
    name: {type: "string", default: "ackermann"}, // name of operation
    numArgs: {type: "number"}, // 
    operation: {type: "function", default: function(){return '1337FAIL'}}
}
operations = [];


 
/*

model("add", {id: 1, name: "pedro", age: "32", address: "Rue de la Science 23, Brussels")
DB // [{name: "Pedro", married: false}] => married set to default even if missing 

model("add", {name: 43, married: "asdfasdf"})
DB // [{name: "NoBody", married: false}] => married and name set to default even wrong type 

model("add", {name: "43", married: true, age: 20})
DB // [{name: "43", married: true, age: 20}] 

*/

function model(op, obj) {
	if (op === "add") {
		add(obj)
	}
}


function add(obj) {

	// we need to check if a key from obj is in the schema
	// if it's not there , don't add it, if it's there we need to check if the type is correct.
	// if the type isn't correct we add a default value
	// if the type is correct we add it
	
	var newObj = {}

	// loop trough every key in the object
	for (key in obj) {
		//check to see if the key in obj is also in schema
		if (key in schema) {
			// if the key in schema we need to check if the type is correct
			if (typeof(obj[key]) === schema[key].type) {
				newObj[key] = obj[key]
			// if type is incorrect return to default
			} else {

				if (schema[key].default != null) {
					newObj[key] = schema[key].default
				}
			}
		} 
	}

	// married set to default even though it is missing => adding married to newobj.
	for (key in schema) {
		// if the key is in obj -> do nothing
		if (key in obj) {
		} else {
			// only add the key if there is a default value
			if (schema[key].default != null) {
				newObj[key] = schema[key].default;
			}
		}
	}
	

	operations[obj.name] = obj;

}

function pushIntoDB(obj) {
	DB.push(obj)
}

console.log(model("add", {name: "43", married: true, age: 20}))