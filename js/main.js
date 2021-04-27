class CountdownTimer {
    constructor({ selector, finalDate }) {
      this.element = selector;
      this.finalDate = finalDate;
    }
    countTime() {
      const time = this.finalDate - Date.now();
      const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
  
      document.querySelector('[data-value="days"]').textContent = `${days}`;
      document.querySelector('[data-value="hours"]').textContent = `${hours}`;
      document.querySelector('[data-value="mins"]').textContent = `${mins}`;
      document.querySelector('[data-value="secs"]').textContent = `${secs}`;
    }
      startTimer() {
          let intervlId = setInterval(() => {
        if(this.finalDate <= Date.now()) {
            clearInterval(intervlId) 
      }   
        this.countTime();
      }, 1000);
      }
  }
  const timer = new CountdownTimer({
    selector: "#timer-1",
    finalDate: new Date("June 1, 21"),
  });
  timer.startTimer();