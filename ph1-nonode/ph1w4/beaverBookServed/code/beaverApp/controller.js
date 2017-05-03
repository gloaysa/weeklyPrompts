var handlers ={
	displayBeavers: function(){
		// in the console
		beaversList.displayBeavers();
		// in the browser
		view.displayBeavers();
	},
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();
	},	
		addBeaver: function(){
		var beaverName = document.getElementById('name');
		var beaverAge = document.getElementById('age');
		var beaverSex = document.getElementById('sex');
		var beaverLocation = document.getElementById('location');

		if ((beaverName.value == '') || (beaverAge.value == '') || (beaverSex.value == '') || (beaverLocation.value == '')){
			alert("thats not a beaver");
		}else {
			beaversList.addBeaver(beaverName.value, beaverAge.value, beaverSex.value, beaverLocation.value);
		};

		beaverName.value = '';
		beaverAge.value = '';
		beaverSex.value = '';
		beaverLocation.value = '';
		
		view.displayBeavers();
	},
	spotBeaver: function(index, text){
		beaversList.spotBeaver(index, text);
		view.displayBeavers();
	},	
	toggleTracked: function(position){
		beaversList.toggleTracked(position);	
		view.displayBeavers();
	},
	untrackAll: function() {
		beaversList.untrackAll();
		view.displayBeavers();
	},
	// initLocalStorage: function() {
	// 	// https://developer.chrome.com/extensions/manifest
	// 	// https://developer.chrome.com/extensions/storage
	// 	if (chrome.storage.local.beavers == undefined)
	// 		chrome.storage.local.set({beavers: beaversList.beavers}, function() {
	//           // Notify that we saved.
	//           console.log('beaverStore initialized');
	//         });
	//     } else {
	//     	console.log('beaverStore loaded');
	//     }
	// }
}


// var handlers ={
// 	displayTodos: function(){
// 		todoList.displayTodos();
// 		view.displayTodos();
// 	},
// 	toggleAll: function(){
// 		todoList.toggleAll();
// 		view.displayTodos();
// 	},	
// 	addTodos: function(){
// 		var addTodoText = document.getElementById('addTodoText');
// 		if(addTodoText.value == ''){
// 			alert('oops,you are trying to add an empty Todo!');
// 		}else{
// 		todoList.addTodos(addTodoText.value);
// 		addTodoText.value = '';
// 		}
// 		view.displayTodos();

// 	},	
// 	changeTodos: function(index, text){
// 		todoList.changeTodos(index, text);
// 		view.displayTodos();
// 	},	
// 	deleteTodos: function(position){
// 		todoList.deleteTodos(position);	
// 		view.displayTodos();
// 	},
// 	toggleCompleted: function(position){
// 		todoList.toggleCompleted(position);	
// 		view.displayTodos();
// 	}
// }
