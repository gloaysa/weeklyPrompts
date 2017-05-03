var handlers ={
	displayBeavers: function(){
		// in the console
		beaversList.displayBeavers();
		// in the browser
		view.displayBeavers(beaversList.getBeavers());
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
		
		view.displayBeavers(beaversList.getBeavers());
	},	
	spotBeaver: function(index, text){
		beaversList.spotBeaver(index, text);
		view.displayBeavers(beaversList.getBeavers());
	},	
	toggleTracked: function(position){
		beaversList.toggleTracked(position);	
		view.displayBeavers(beaversList.getBeavers());
	},
	untrackAll: function() {
		beaversList.untrackAll();
		view.displayBeavers(beaversList.getBeavers());
	}
}
