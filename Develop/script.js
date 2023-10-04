// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  var today = dayjs();
  var hour9 = $("#hour-9");
  var hour10 = $("#hour-10");
  var hour11 = $("#hour-11");
  var hour12 = $("#hour-12");
  var hour13 = $("#hour-13");
  var hour14 = $("#hour-14");
  var hour15 = $("#hour-15");
  var hour16 = $("#hour-16");
  var hour17 = $("#hour-17");
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $("#currentDay").text(today.format("MMMM DD, YYYY"));

   // Pseudo:
// make multiple timeblocks
// rename timeblocks accordingly with standard work hours
// global event listener to make sure clicking on the save button
// use event target, to traverse the DOM
// the save button is to save input into the timeblock into local storage
// 


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



   // Pseudo:
// declare current time for callback as a variable
// create an array and place DOM nodes in the array / DOM node: grabs an element on the page.
// Use loop to iterate through array to compare to current date/time using dayjs()
// assign past, present, and future classes
// 


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?




   // Pseudo:
// Grab information from local storage, in correspondence to the time of the day/ locate the appropriate timeblock and set value of input/textarea to the corresponding data to that timeblock
// 

// 1 object per time slot / or 1 that encompasses all of them / 
});