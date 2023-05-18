document.addEventListener("DOMContentLoaded", function() {
    var timeDiv = document.getElementById("time");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    timeDiv.innerHTML = hours + ":" + minutes + ":" + seconds;
});
  