var beaversList =	{
		// challenge - change 'age' to birthday, and make age a dynamic property
		beavers: [{
			name: "tod",
			age: 5,
			sex: "male",
			locationHistory: ["delerium", "Big Game", "Goupil le Fol"],
			tracked: true
		},{
			name: "lauretta",
			age: 13,
			sex: "female",
			locationHistory: ["delerium", "Big Game", "Goupil le Fol"],
			tracked: true
		},{
			name: "anne",
			age: 2,
			sex: "female",
			locationHistory: ["palais de justice", "musee du peuple"],
			tracked: false
		}],
		displayBeavers: function(){
			if(this.beavers.length === 0){
				console.log('there are no beavers here');
			}else{
				for(var i = 0; i < this.beavers.length; i++){
					if(this.beavers[i].tracked == true){
						console.log(this.beavers[i]);
					}else{
						console.log(this.beavers[i]);							
					}
				}
			}
		},
		toggleTracked: function(position){
			var beaver = this.beavers[position];
			beaver.tracked = !beaver.tracked;
		},
		addBeaver: function(newName, newAge, newSex, location){
			var newLocationHistory = [];
			newLocationHistory.push(location);
			this.beavers.push({
				name: newName,
				age: newAge,
				sex: newSex,
				locationHistory: newLocationHistory,
				tracked: true
			});
		},
		spotBeaver: function(index, newLocation){
			this.beavers[index].locationHistory.push(newLocation);
		},
		deleteBeaver: function(position){
			this.beavers.splice(position, 1);
		},
		untrackAll: function(){
			// grant funding runs out, untrack all beavers
			var totalBeavers = this.beavers.length;

			this.beavers.forEach(function(beaver){
				beaver.tracked = false;
			});
			
		},
		inventoryBeavers: function(){
			var totalBeavers = this.beavers.length;
			var trackedBeavers = 0;

			var beaverNames = [];
			this.beavers.forEach(function(beaver){
				if(beaver.tracked === true){
					trackedBeavers++;
					beaverNames.push(beaver.name);
				}
			});
			return trackedBeavers;
		}
	};

	