// Display current date 
const yourDate = moment().format("MMMM Do YYYY");
const displayDate = document.getElementById('currentDay')
const displayTime = document.getElementById('currentTime')
displayDate.innerHTML = yourDate;


setInterval(function constTime() {
  const yourTime = moment().format("h:mm:ss A")
  displayTime.innerHTML = yourTime;

}, 1000)