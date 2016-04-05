class TimerService {
  
  constructor() {}

  render(time) {
  	let days = Math.floor(time / 86400);
  	let hours = Math.floor(time / 3600) % 24;
  	let minutes = Math.floor(time / 60) % 60;
  	let seconds = Math.floor(time % 60);

  	let result = (days < 10 ? '0' + days : days) + 'D ' +
  	  (hours < 10 ? '0' + hours : hours) + 'H ' + 
  	  (minutes < 10 ? '0' + minutes : minutes) + 'M ' + 
  	  (seconds < 10 ? '0' + seconds : seconds) + 'S';

  	console.log(result);
  	return result;
  }

}

TimerService.$inject = [];

export default TimerService;