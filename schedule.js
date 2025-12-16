function schedulePlay() {
  localStorage.setItem("playTime", playTime.value);
  alert("Scheduled at " + playTime.value);
}

setInterval(() => {
  const now = new Date().toTimeString().slice(0,5);
  if (localStorage.getItem("playTime") === now) {
    playBoth();
  }
}, 30000);
