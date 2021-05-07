let a;
let time;
time = ()=>{
    a = new Date();
    time =
      a.getHours() +
      ":" +
      a.getMinutes() +
      ":" +
      a.getSeconds() +
      " on " +
      a.toLocaleDateString();
    document.getElementById("time").innerHTML = time;
}
setInterval(time,1000);
var mybutton= document.getElementById("myBtn");
function topfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
