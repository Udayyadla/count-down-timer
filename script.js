const timeCountInput = document.getElementById("timeCount");
const currentTimeDiv = document.getElementById("current-time");
let intervalId;

timeCountInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    clearInterval(intervalId);

    let initialTime = parseInt(timeCountInput.value);
    if (isNaN(initialTime)) {
      initialTime = 0;
    } else {
      initialTime = Math.floor(initialTime);
    }

    currentTimeDiv.textContent = initialTime;

    intervalId = setInterval(function() {
      initialTime--;
      if (initialTime < 0) {
        clearInterval(intervalId);
        currentTimeDiv.textContent = 0;
      } else {
        currentTimeDiv.textContent = initialTime;
      }
    }, 1000);
  }
});
