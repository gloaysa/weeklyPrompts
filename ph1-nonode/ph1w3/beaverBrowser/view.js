var view = {
	displayBeavers: function(){
		var beaversUl = document.querySelector('ul');
		beaversUl.innerHTML = '';
		beaversList.beavers.forEach(function(beaver, position){
			var beaverLi  = document.createElement('li');
			beaverLi.className = 'beaver-list'
			var beaverInfoWithTracked = '';	
			if(beaver.tracked === true){
				beaverInfoWithTracked = '(x) ' + this.stringifyBeaver(beaver);
			}else{
				beaverInfoWithTracked = '( ) ' + this.stringifyBeaver(beaver);
			}		

			beaverLi.id = position;
			beaverLi.textContent = beaverInfoWithTracked;
			beaverLi.appendChild(this.createTrackedButton());
			beaverLi.appendChild(this.createSpottedButton());
			beaversUl.appendChild(beaverLi);
		}, this);
	},
	stringifyBeaver: function(beaver){
		var beaverString = 'name: ' + beaver.name + ', age: ' + beaver.age + ', sex: ' + beaver.sex + ', spotted: [' + beaver.locationHistory + ']';
		return beaverString;
	},
	createSpottedButton: function(){
		var completedButton = document.createElement('button');
		completedButton.textContent = 'Spot it';
		completedButton.className = 'spottedButton';
		return completedButton;
	},	
	createTrackedButton: function(){
		var trackedButton = document.createElement('button');
		trackedButton.textContent = 'Tracked';
		trackedButton.className = 'trackedButton';
		return trackedButton;
	},
	setUpEventListeners: function(){		
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event){
			var elementClicked = event.target;

			if(elementClicked.className == "trackedButton"){
				handlers.toggleTracked(parseInt(elementClicked.parentNode.id));
			}else if(elementClicked.className == "spottedButton"){
				var newText = prompt("where it at?");
				handlers.spotBeaver(parseInt(elementClicked.parentNode.id), newText);
			}
		});
	}
}