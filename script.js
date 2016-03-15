// Set 1

var div;

// create a buildBox function
function buildBox() {
	// create and insert an empty div on the page with: positioning, top and left coordinates, background color expressed as rgba 
	div = document.createElement('div');
	div.style.cssText = 'width: 300px; height: 300px; position: absolute; top: 0; left: 0; background-color: rgba(0,0,0,1);';
	document.body.appendChild(div);
}

// write a function "randInRange" that generates a random integer, given a range of possible values (min & max)
function randInRange(min, max) {
	return Math.floor(Math.random()*(max-min+1))+min;
}

// write a function "setStyles" that accepts an element and sets all numerical CSS properties to random values within logically derived ranges.
function setStyles(element) {
	element.style.width = randInRange(1,600)+'px';
	element.style.height = randInRange(1,500) + 'px';
	element.style.left = randInRange(0,100) + 'px';
	element.style.top = randInRange(0,100) + 'px';
	element.style.backgroundColor = 'rgba(' + randInRange(0,256) + ',' + randInRange(0,256) + ',' + randInRange(0,256) + ',' + randInRange(0,1) + ')';
}