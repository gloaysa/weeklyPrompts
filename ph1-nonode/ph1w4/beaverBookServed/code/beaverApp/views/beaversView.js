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


// var view = {
// 	displayTodos: function(){
// 		var todosUl = document.querySelector('ul');
// 		todosUl.innerHTML = '';
// 		todoList.todos.forEach(function(todo, position){
// 			var todoLi  = document.createElement('li');
// 			todoLi.className = 'todo-list'
// 			var todoTextWithCompleted = '';	
// 			if(todo.completed === true){
// 				todoTextWithCompleted = '(x) ' + todo.todoText;
// 			}else{
// 				todoTextWithCompleted = '( ) ' + todo.todoText;
// 			}		

// 			todoLi.id = position;
// 			todoLi.textContent = todoTextWithCompleted;
// 			todoLi.appendChild(this.createDeleteButton());
// 			todoLi.appendChild(this.createCompletedButton());
// 			todoLi.appendChild(this.createChangeButton());
// 			todosUl.appendChild(todoLi);
// 		}, this);
// 	},
// 	createDeleteButton: function(){
// 		var deleteButton = document.createElement('button');
// 		deleteButton.textContent = 'Delete';
// 		deleteButton.className = 'deleteButton';
// 		return deleteButton;
// 	},
// 	createCompletedButton: function(){
// 		var completedButton = document.createElement('button');
// 		completedButton.textContent = 'Completed';
// 		completedButton.className = 'completedButton';
// 		return completedButton;
// 	},	
// 	createChangeButton: function(){
// 		var changeButton = document.createElement('button');
// 		changeButton.textContent = 'Change';
// 		changeButton.className = 'changeButton';
// 		return changeButton;
// 	}
// }