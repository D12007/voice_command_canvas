x=0;
y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
}