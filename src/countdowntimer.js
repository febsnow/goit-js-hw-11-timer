import getTimeComponents from './timeconversion';

export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
    this.daysEl = document.querySelector('[data-value=days]');
    this.hoursEl = document.querySelector('[data-value=hours]');
    this.minutesEl = document.querySelector('[data-value=mins]');
    this.secondsEl = document.querySelector('[data-value=secs]');
  }

  updateClockFace({ days, hours, mins, secs }) {
    this.daysEl.textContent = `${days}`;
    this.hoursEl.textContent = `${hours}`;
    this.minutesEl.textContent = `${mins}`;
    this.secondsEl.textContent = `${secs}`;
  }

  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = getTimeComponents(deltaTime);
      if (deltaTime > 0) {
        this.updateClockFace(time);
      } else {
        this.stop();
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.updateClockFace({ days: '00', hours: '00', mins: '00', secs: '00' });
    console.log('Время истекло');
  }
}
