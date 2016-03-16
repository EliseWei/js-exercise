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
	var divWidth = randInRange(1,600),
		divHeight = randInRange(1,500),
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

// create a new loop that smoothly animates the position of the box, moving it 60 times per second
function moveBox(element) {
    var leftPos = 0,
    	topPos = 0,
		divWidth = element.offsetWidth,
		divHeight = element.offsetHeight,
		leftMax = windowWidth - divWidth,
		topMax = windowHeight - divHeight,
		velocity = randInRange(0,15); // randomize velocity

    leftPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
    topPos += (element.offsetTop - element.scrollTop + element.clientTop);

    var moveRepeat = setTimeout(function(){
    	moveBox(element);
    }, velocity);

    if (leftPos == leftMax || topPos == topMax) {
        clearTimeout(moveRepeat);
    } else {
        leftPos++; 
        topPos++; 
        element.style.left = leftPos + 'px'; 
        element.style.top = topPos + 'px';
    }

}

buildBox();