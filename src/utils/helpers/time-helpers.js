import moment from 'moment';

function getTimesArray(startingTime = 8) {
  const hours = [];
  for (let hour = startingTime + 1; hour < 18; hour++) {
    hours.push(moment({ hour }).format('h:mm A'));
    hours.push(
      moment({
        hour,
        minute: 30,
      }).format('h:mm A')
    );
  }
  return hours;
}

function get24HrTime(time) {
  if (time.includes('PM')) {
    if (+time[0] === 1 && +time[1] === 2) return 12;
    else return +time[0] + 12;
  }
  if (time.includes('AM')) {
    if (+time[0] === 9) return 9;
    else {
      let num = time[0] + time[1];
      return +num;
    }
  }
}

export { getTimesArray, get24HrTime };
