let a,time;
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
function topFunction(){
  document.body.scrollTop = 0;
}
