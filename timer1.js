const alarmTimer = process.argv;
alarmTimer.splice(0, 2);
//console.log(alarmTimer);
for (let time of alarmTimer) {
  time = parseInt(time);
  //console.log(time);
  if (time < 0 || (typeof (time) === 'NaN' || !isFinite(time))) {
    alarmTimer.splice(alarmTimer.indexOf(time), 1);
  }
  console.log(alarmTimer);

}

for (let time of alarmTimer) {
  setTimeout(() => console.log('.'), time * 1000);
}


// process.stdout.write('\x07')