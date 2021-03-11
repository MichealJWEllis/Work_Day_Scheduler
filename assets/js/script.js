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