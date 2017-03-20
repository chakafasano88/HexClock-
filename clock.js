
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');


  function hexClock() {
  var time = new Date();
  var hours = (time.getHours() % 12).toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if (hours.length < 2 ){
    hours = '0' + hours;
  }

  if (minutes.length < 2 ){
    minutes = '0' + minutes;
  }

  if (seconds.length < 2 ){
    seconds = '0' + seconds;
  }

  var timeString = hours + ':' + minutes + '.' + seconds;
  var timeString2 = '#' + hours + minutes + seconds;
  document.getElementById('clock').innerHTML = timeString;

  document.body.style.backgroundColor = timeString2;

}

setInterval(hexClock, 1000);
