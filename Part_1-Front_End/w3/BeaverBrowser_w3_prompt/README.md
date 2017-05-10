# Project: Beaver Browser

[![Elium Academy](http://www.zoomby.es/img/Elium-Logo-200-px-Black-PNG.png)](http://www.elium.academy)


### Prompt

> You are an aspiring naturalist tracking the behavior of local Urban Beavers. So you're going to create your own web application that will help you to add new beavers that you may find, check the ones that you are currently tracking and add new locations if you spot them again.

---

Be ready, this file is loooong.

#### This project contains 5 files: 1 HTML, 1 CSS and 3 Javascript files.

1. **beavers.html**: The site that the people will see and use. The structure is up to you, but it must contain:  

  + Imports: refering to the .css and all the .js files.  
  + Interactions:

  		- UNTRACK ALL BEAVERS: be able to untrack all beavers when funding is cut.

  		- UNTRACK SINGLE BEAVER: maybe it died :( Or maybe you're just bored of it.

  		- RETRACK A SINGLE BEAVER: maybe it wasn't dead!

  		- ADD A BEAVER: using some input fields to collect all the needed info.

  		- SPOT A BEAVER: prompt the user for the new location and add it to the beaver list.

2. **beavers.css**: A file to make the HTML looks pretty :sparkles: All the content is optional.

3. **model.js**: All the functionality connected to storing, accessing, modifying beavers. It will have a main object storing other objects and functions. No libraries, just vanilla javascript :)

	+ beaversList: the main object, contains objects and functions.  
	**PROPERTIES**

		- beaverRecord: object. Their properties must be:

			* NAME: string, the beaver's name.  
			* AGE: integer, the beaver's age.  
			* SEX: string, indicating beaver's sex.  
			* LOCATION: array, containing history of recorded sightings.  
			* TRACKED: boolean, is this beaver being tracked?

		- beavers: array containing beavers records.  
	**METHODS**

		- trackedBeavers: array containing the names of the beavers being tracked.  
		- toogleTracked: a function. Accesses the indicated beaver and sets its 'tracked' property to what it wasn't.

			* arguments: integer, the index of the beaver to un/track.  
			* returns: console.log the success/not message.

		- addBeaver: function. Uses the arguments to create a new beaver object which is saved into 'beavers' array.

			* arguments: string and number, a string with the name, sex, gender and location (optional) and a number with the beaver's age.  
			* returns: console.log success/not message.

		- spotBeaver: function. Finds the right beaver from 'beavers' array and adds the new location to 'location'.

			* arguments: it will take two arguments: something to identify which beaver modify and the new location.  
			* returns: nada.

		- untrackAll: function. Change all the beaver's tracked property to false.

			* arguments: nada.  
			* returns: nada.

		- inventoryBeavers: function. Extracts the 'name' from each beaver being tracked and pushes it into the 'trackedBeavers' array.

			* no arguments.  
			* returns: array.

4. **view.js**: All functionality connected to making something visible on screen (DOM manipulation). Again, no libraries, plain javascript:

	+ beaverViewer: the main object. All the functions are stored inside:  
	**METHODS**

		- displayBeavers: it's the function used to display all the beavers. It creates a html 'ul' and populates it with beaver's profiles and all the buttons that entails. It doesn't take any argument. When it's called, it will display beavers info nicely.

		- stringfyBeaver: reads through the properties of the beave object passed as argument and concatinates them into a string.

			* arguments: a beaver object.  
			* returns: a stringified version of the beaver object.

		- createSpottedButton: creates a button with an specific class and some text inside. This is the button that will be used when the user spot a beaver to add the location.

			* arguments: none or beaver's name (up to you).  
			* returns: success message and the button, or just failure message.

		- createTrackedButton: creates a button with an specific class and some nice text inside. This is the button that will be used to start/stop tracking an specific beaver.

			* arguments: none or beaver's name (up to you).  
			* returns: success message and the button.

		- setupEventListeners: connects onclick events to buttons according to their class.

			* arguments: nada.  
			* returns: nada.

5. **controller.js**: manipulates 'beaversList' and 'beaverViewer'. All the buttons call a method to this object. No libraries, vanilla Javascript.

	+ handlers: main object. All the functions are stored inside:  
	**METHODS**

		- displayBeavers: calls 'beaverViewer.displayBeavers'.

			* arguments: nada.  
			* returns: console.log success/not message.

		- addBeaver: calls 'beaversList.addBeaver' and 'displayBeavers' methods.

			* arguments: nada.  
			* returns: console.log success/not message.

		- toggleTracked: tells 'beaversList.toggleTracked' to un/track an specific beaver.

			* arguments: the beaver to track/untrack.  
			* returns: nada.

		- spotBeaver: calls 'beaversList.spotBeaver' method with the new location and the beaver spotted. Then calls 'displayBeavers' method to refresh the info on the page.

			* arguments: it takes two arguments, the beaver spotted and the location.  
			* returns: console.logs success/not message.

		- untrackAll: calls 'beaversList.untrackAll' and 'displayBeavers' methods.

			* arguments: nada.
			* returns: nada.

---

### Usage example

You see Patty at the liquor store, so you open your phone, click 'spot Patty' and enter 'liquor store' in the text field. Now her info includes the liquor store.

There's a new beaver on the metro today. You hand him your phone and ask him to register himself. He enters his name, age, sex, and 'line 5' into the text blanks. Now you've got another beaver profile on the home page.

Patty gets sick of you writting down what she does every day and threatens to call the police. You click 'untrack Patty' and now all you can see is her name and a big red 'X' next to it.

---

### Challenge

1. Change the content of every button when the status changes. For example: the content of the 'track beaver' button could be something like "start tracking" when the beaver isn't being tracked and "stop tracking" when it's being tracked.

2. Show on the page nicely the 'trackedBeavers' array. The content will change when the status of the 'tracked' property of each beaver changes. For example: when the user clicks on the 'track beaver' button, it will be showed on the page nicely the name of that beaver.

3. (extra challengy) refactor your project to use classes instead of objects.

---

### RESOURCES

[appendChild](https://developer.mozilla.org/en/docs/Web/API/Node/appendChild) | [parentNode](https://developer.mozilla.org/en/docs/Web/API/ParentNode)
