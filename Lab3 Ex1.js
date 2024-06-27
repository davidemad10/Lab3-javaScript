// Ex:1
var interval;
function start(){
    interval=setInterval(function(){
        var date = new Date();
        document.getElementById("start").innerHTML=date.toLocaleTimeString();
    },1000)
}
