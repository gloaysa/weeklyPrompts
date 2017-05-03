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
		
		beaversList.addBeaver(beaverName.value, beaverAge.value, beaverSex.value, beaverLocation.value);
		
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
	}
}


view.setUpEventListeners();
view.displayBeavers();