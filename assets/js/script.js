// Display current date 
const yourDate = moment().format("MMMM - Do , YYYY");
const displayDate = document.getElementById('currentDay')

displayDate.innerHTML = yourDate;

// Will reload current time on HTML
setInterval(function constTime() {
  const displayTime = document.getElementById('currentTime')
  const yourTime = moment().format("h:mm:ss A")
  displayTime.innerHTML = yourTime;

}, 1000)

// this will color the teaxtarea based on the timeline where the colors 1-3 are defined as the following:-
// 1. grey equals past the hour
// 2. red equals current hour
// 3. green eqauls future hours
function updateByTheHour() {
  var currentHour = moment().format("h:mm A");
  var scheduleTime = document.querySelectorAll("#timeSlot");
  console.log(scheduleTime);
  console.log(currentHour);
  // $(".time-block").each(function () {
  //     var blockHour = parseInt($(this).attr("id").split(" ")[0]);

  //     if (blockHour < currentHour) {
  //         $(this).addClass("past");
  //     } else if (blockHour === currentHour) {
  //         $(this).removeClass("past");
  //         $(this).addClass("present");
  //     } else {
  //         $(this).removeClass("past");
  //         $(this).removeClass("present");
  //         $(this).addClass("future");
  //     }
  // });
}
//this calls the function updateByTheHour
updateByTheHour();

