// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  $(".saveBtn").on("click", function(){
    var descriptionText = $(this).siblings(".description").val();
    var timeBlockID = $(this).parent().attr("id");
    localStorage.setItem(timeBlockID, descriptionText);
  });

  var today = dayjs();
 
    $("#hour-9 .description").text(localStorage.getItem("hour-9"));
    $("#hour-10 .description").text(localStorage.getItem("hour-10"));
    $("#hour-11 .description").text(localStorage.getItem("hour-11"));
    $("#hour-12 .description").text(localStorage.getItem("hour-12"));
    $("#hour-13 .description").text(localStorage.getItem("hour-13"));
    $("#hour-14 .description").text(localStorage.getItem("hour-14"));
    $("#hour-15 .description").text(localStorage.getItem("hour-15"));
    $("#hour-16 .description").text(localStorage.getItem("hour-16"));
    $("#hour-17 .description").text(localStorage.getItem("hour-17"));
  
  $("#currentDay").text(today.format("MMMM DD, YYYY"));

    $(".time-block").each(function(){
      var blockHour = $(this).attr("id").split("-");
      console.log(blockHour);
      if(today.hour() > blockHour[1]){
        $(this).addClass("past");
      }
      else if(today.hour() < blockHour[1]){
        $(this).addClass("future");
      }
      else{
        $(this).addClass("present");
      }
    })
  }

);