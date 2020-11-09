import CountdownTimer from './countdowntimer';

const countdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2021, 1, 2, 0, 0),
});

countdown.start();
