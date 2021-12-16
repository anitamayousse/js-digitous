function format(sec) 
 {
     var hours = Math.floor(sec / 3600);
     var minutes = Math.floor((sec - (hours * 3600)) / 60);
     var seconds = Math.round(sec - (hours * 3600) - (minutes * 60));
     var result = (hours < 10 ? "0" + hours : hours);
     result += ":" + (minutes < 10 ? "0" + minutes : minutes);
     result += ":" + (seconds < 10 ? "0" + seconds : seconds);
     return result;
}
console.log(format(3700))