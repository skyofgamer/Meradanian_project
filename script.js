document.addEventListener("DOMContentLoaded", () => {
    const countdownElement = document.getElementById("timer");
  
    function updateCountdown() {
      const now = new Date();
      const targetDate = new Date("2030-01-01T00:00:00");
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        countdownElement.textContent = "Happy New Year 2030!";
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000); // Update every second
  });
  
  // main.js
