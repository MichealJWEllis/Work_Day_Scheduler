
const yourDate = moment().format("MMMM - Do , YYYY");
const displayDate = document.getElementById('currentDay')
const currentHour = moment().format("HH:mm");
const colorChange = document.querySelectorAll("#colorSwitch");
const timeOfDay = document.querySelectorAll("#timeSlot");
const colorChange_arr = Array.prototype.slice.call(colorChange);
const timeOfDay_arr = Array.prototype.slice.call(timeOfDay);

// displayDate.innerHTML = yourDate;

// Will reload current time on HTML
setInterval(function constTime() {
  const displayTime = document.getElementById('currentTime')
  const yourTime = moment().format("h:mm:ss A")
  displayTime.innerHTML = yourTime;

}, 1000)


function updateByTheHour() {
  for (i = 0; i < timeOfDay_arr.length; i++) {
    let x = timeOfDay_arr[i].innerText;
    let y = moment(x,["h:mm A"]).format("HH:mm")
      
      if (parseInt(y) < parseInt(currentHour)) {
        console.log('past', colorChange_arr[i])
        
      } else if (parseInt(y) === parseInt(currentHour)){
        console.log('present', colorChange_arr[i])

      } else {
        console.log('future', colorChange_arr[i])
      }
  }
} 

updateByTheHour();
