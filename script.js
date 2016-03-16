// Set 1

var windowWidth = window.innerWidth,
	windowHeight = window.innerHeight;

// create a buildBox function
function buildBox() {
	// create and insert an empty div on the page with: positioning, top and left coordinates, background color expressed as rgba 
	var div = document.createElement('div');
	div.style.position = 'absolute';
	setStyles(div);
	document.body.appendChild(div);

	moveBox(div);
	return div;
}

// write a function "randInRange" that generates a random integer, given a range of possible values (min & max)
function randInRange(min, max) {
	var range = max-min;
	return Math.floor(Math.random()*range)+min;
}
// write a function "setStyles" that accepts an element and sets all numerical CSS properties to random values within logically derived ranges.
function setStyles(element) {
	var divWidth = randInRange(1,Math.min(500,windowWidth)),
		divHeight = randInRange(1,Math.min(500,windowHeight)),
		leftMax = windowWidth - divWidth,
		topMax = windowHeight - divHeight;

	element.style.width = divWidth + 'px';
	element.style.height = divHeight + 'px';
	element.style.left = randInRange(0,leftMax) + 'px';
	element.style.top = randInRange(0,topMax) + 'px';
	element.style.backgroundColor = 'rgba(' + randInRange(0,256) + ',' + randInRange(0,256) + ',' + randInRange(0,256) + ',' + Math.random() + ')';

	// using setTimeout, run setStyles on the box once every second, continuously
	/*var repeater = setTimeout(function(){
		setStyles(element);
	},1000);*/
}

var mainDiv = buildBox(),
	divWidth = mainDiv.offsetWidth,
	divHeight = mainDiv.offsetHeight,
	leftMax = windowWidth - divWidth,
	topMax = windowHeight - divHeight,
	leftPos = mainDiv.offsetLeft,
	topPos = mainDiv.offsetTop,
	frameRate = 1000/60,
	x = randInRange(-5,5),
	y = randInRange(-5,5); 

// create a new loop that smoothly animates the position of the box, moving it 60 times per second
function moveBox(element) {
    if (leftPos < leftMax && leftPos > 0 && topPos < topMax && topPos > 0) {
        leftPos += x; 
        topPos += y; 
        element.style.left = leftPos + 'px'; 
        element.style.top = topPos + 'px';

        var moveRepeat = setTimeout(function(){
	    	moveBox(element);
	    }, frameRate);
    }
}