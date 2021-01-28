var loopVar;
loopVar = setInterval(time, 1000);

function timePrint() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
