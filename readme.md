
_Given an empty HTML document, use raw JS (and optionally some CSS) to..._  
**Reminder: Inspection tools are your friend.**

###Set 1
1. create and insert an empty div on the page.
  It should have
  * width and height
  * positioning
  * top and left coordinates
  * background color expressed as rgba
2. write a function "buildBox" that creates and inserts that div on the page and assigns it to a variable.
3. write a function "randInRange" that generates a random integer, given a range of possible values (min & max).
4. write a function "setStyles" that accepts an element and sets all numerical CSS properties to random values within logically derived ranges.

###Set 2
5. using setTimeout, run setStyles on the box once every second, continuously. Ok, then turn it off.
6. create a new loop that smoothly animates the position of the box, moving it 60 times per second. 1px horizontal and 1px vertical is a good velocity to start.
7. set the initial velocity to be randomly generated, within reasonable bounds.
8. update the animation such that the box changes direction predictably when it touches the edge of the viewport.
9. if you haven't already, set the velocity to change randomly (within acceptible bounds!) when it touches the edge of the viewport.

###Set 3
10. update buildBox to be a constructor for a new Box Object prototype.
  It should have as properties
  * a styled HTML element that exists in the DOM
  * its position (x & y)
  * its size (width & height)
  * its velocity (x & y)
11. write a method "bounce" to handle the speed and direction changes.
12. attach "bounce" to click events on the Box, so it changes direction and speed when clicked upon.
13. using a loop and an array, create 100 Boxes and store them for later reference.
