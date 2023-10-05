// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  var today = dayjs();
  var hour9 =$("div#hour-9");
  var hour10 = $("div#hour-10");
  var hour11 = $("div#hour-11");
  var hour12 = $("div#hour-12");
  var hour13 = $("div#hour-13");
  var hour14 = $("div#hour-14");
  var hour15 = $("div#hour-15");
  var hour16 = $("div#hour-16");
  var hour17 = $("div#hour-17");
  var textBox =$(".description");
  // var timeBlock = $(".time-block");
  // var container = $(".container-lg")
  // var hourArray = [hour9,hour10,hour11,hour12,hour13,hour14,hour15,hour16,hour17];

  hour9.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput9",hour9.find(textBox).val())
  });
  hour10.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput10",hour10.find(textBox).val())
  });
  hour11.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput11",hour11.find(textBox).val())
  });
  hour12.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput12",hour12.find(textBox).val())
  });
  hour13.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput13",hour13.find(textBox).val())
  });
  hour14.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput14",hour14.find(textBox).val())
  });
  hour15.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput15",hour15.find(textBox).val())
  });
  hour16.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput16",hour16.find(textBox).val())
  });
  hour17.on("click", ".saveBtn", function(){
    localStorage.setItem("saveInput17",hour17.find(textBox).val())
  });

  // for (let i = 0; i < hourArray.length; i++) {
  //   localStorage.setItem("saveInput", textBox.val(hourArray[i]))
  // }
    // var userInput = $('input[class=".description"]');
    // global event listener to make sure clicking on the save button
  // use event target, to traverse the DOM
  // the save button is to save input into the timeblock into local storage
  // 
    // console.log(textBox.val());
    // localStorage.setItem("saveInput9",textBox.val());
    var hour9save = localStorage.getItem("saveInput9");
    var hour10save = localStorage.getItem("saveInput10");
    var hour11save = localStorage.getItem("saveInput11");
    var hour12save = localStorage.getItem("saveInput12");
    var hour13save = localStorage.getItem("saveInput13");
    var hour14save = localStorage.getItem("saveInput14");
    var hour15save = localStorage.getItem("saveInput15");
    var hour16save = localStorage.getItem("saveInput16");
    var hour17save = localStorage.getItem("saveInput17");
    var saveArray = [hour9save,hour10save,hour11save,hour12save,hour13save,hour14save,hour15save,hour16save,hour17save];
    hour9.children(".description").text(hour9save);
    hour10.children(".description").text(hour10save);
    hour11.children(".description").text(hour11save);
    hour12.children(".description").text(hour12save);
    hour13.children(".description").text(hour13save);
    hour14.children(".description").text(hour14save);
    hour15.children(".description").text(hour15save);
    hour16.children(".description").text(hour16save);
    hour17.children(".description").text(hour17save);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $("#currentDay").text(today.format("MMMM DD, YYYY"));

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



   // Pseudo:
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