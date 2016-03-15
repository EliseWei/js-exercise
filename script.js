// Set 1

// create a buildBox function
function buildBox() {
	// create and insert an empty div on the page with: positioning, top and left coordinates, background color expressed as rgba 
	var div = document.createElement('div');
	div.style.cssText = 'width: 300px; height: 300px; position: absolute; right: 0; bottom: 0; background-color: rgba(0,0,0,1);';
	document.body.appendChild(div);
}

// write a function "randInRange" that generates a random integer, given a range of possible values (min & max)
function randInRange(min, max) {
	return Math.floor(Math.random()*(max-min))+min;
}