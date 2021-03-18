
const yourDate = moment().format("MMMM - Do , YYYY");
const displayDate = document.getElementById('currentDay')
const currentHour = moment().format("HH:mm");
const colorChange = document.querySelectorAll("#colorSwitch");
const timeOfDay = document.querySelectorAll("#timeSlot");
// array conversions from NodeLists
const colorChange_arr = Array.prototype.slice.call(colorChange);
const timeOfDay_arr = Array.prototype.slice.call(timeOfDay);
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// displayDate.innerHTML = yourDate;

// This function will display and load current time on HTML
setInterval(function constTime() {
  const displayTime = document.getElementById('currentTime')
  const yourTime = moment().format("h:mm:ss A")
  displayTime.innerHTML = yourTime;

}, 1000)

// This function will update the color of the textareas via iterating after matching the converted current time
function colorChangeViaHour() {
  for (i = 0; i < timeOfDay_arr.length; i++) {
    let x = timeOfDay_arr[i].innerText;
    let y = moment(x, ["h:mm A"]).format("HH:mm")

    if (parseInt(y) < parseInt(currentHour)) {
      console.log('past', colorChange_arr[i])
      $(colorChange_arr[i]).addClass("past");
      
    } else if (parseInt(y) == parseInt(currentHour)) {
      console.log('present', colorChange_arr[i])
      $(colorChange_arr[i]).addClass("present");
      
    } else  {
      console.log('future', colorChange_arr[i])
      $(colorChange_arr[i]).addClass("future");
    }
  }
}


// $("button").click(function () {
//   console.log("clicked");
//   var task = document.getElementById('#btn')
//   localStorage.setItem('task', JSON.stringify(task));
// })

colorChangeViaHour();
