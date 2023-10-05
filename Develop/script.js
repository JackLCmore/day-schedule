// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  var today = dayjs();
  var hour9 = $("div#hour-9") 
  var hour10 = $("div#hour-10")
  var hour11 = $("div#hour-11")
  var hour12 = $("div#hour-12")
  var hour13 = $("div#hour-13")
  var hour14 = $("div#hour-14")
  var hour15 = $("div#hour-15")
  var hour16 = $("div#hour-16")
  var hour17 = $("div#hour-17")
  var textBox = $(".description")

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

    var hour9save = localStorage.getItem("saveInput9");
    var hour10save = localStorage.getItem("saveInput10");
    var hour11save = localStorage.getItem("saveInput11");
    var hour12save = localStorage.getItem("saveInput12");
    var hour13save = localStorage.getItem("saveInput13");
    var hour14save = localStorage.getItem("saveInput14");
    var hour15save = localStorage.getItem("saveInput15");
    var hour16save = localStorage.getItem("saveInput16");
    var hour17save = localStorage.getItem("saveInput17");

    hour9.children(".description").text(hour9save);
    hour10.children(".description").text(hour10save);
    hour11.children(".description").text(hour11save);
    hour12.children(".description").text(hour12save);
    hour13.children(".description").text(hour13save);
    hour14.children(".description").text(hour14save);
    hour15.children(".description").text(hour15save);
    hour16.children(".description").text(hour16save);
    hour17.children(".description").text(hour17save);
  
  $("#currentDay").text(today.format("MMMM DD, YYYY"));

  console.log(today.hour());
  console.log($("#hour-9").find(".hour").text());

  if(today.hour() > 9){
    hour9.addClass("past");
  }
  else if (today.hour() < 9){
    hour9.addClass("future");
  }
  else{
    hour9.addClass("present");
  }
  if(today.hour() > 10){
    hour10.addClass("past");
  }
  else if (today.hour() < 10){
    hour10.addClass("future");
  }
  else{
    hour10.addClass("present");
  }
  if(today.hour() > 11){
    hour11.addClass("past");
  }
  else if (today.hour() < 11){
    hour11.addClass("future");
  }
  else{
    hour11.addClass("present");
  }
  if(today.hour() > 12){
    hour12.addClass("past");
  }
  else if (today.hour() < 12){
    hour12.addClass("future");
  }
  else{
    hour12.addClass("present");
  }
  if(today.hour() > 13){
    hour13.addClass("past");
  }
  else if (today.hour() < 13){
    hour13.addClass("future");
  }
  else{
    hour13.addClass("present");
  }
  if(today.hour() > 14){
    hour14.addClass("past");
  }
  else if (today.hour() < 14){
    hour14.addClass("future");
  }
  else{
    hour14.addClass("present");
  }
  if(today.hour() > 15){
    hour15.addClass("past");
  }
  else if (today.hour() < 15){
    hour15.addClass("future");
  }
  else{
    hour15.addClass("present");
  }
  if(today.hour() > 16){
    hour16.addClass("past");
  }
  else if (today.hour() < 16){
    hour16.addClass("future");
  }
  else{
    hour16.addClass("present");
  }
  if(today.hour() > 17){
    hour17.addClass("past");
  }
  else if (today.hour() < 17){
    hour17.addClass("future");
  }
  else{
    hour17.addClass("present");
  }
});