
let progress=document.querySelector("#slidebar");
let song=document.querySelector("#song");
let x=document.querySelector(".play");
let album=document.querySelector(".playerpfp");
let playersongname=document.querySelector(".playersongname");
let playerartistname=document.querySelector(".playerartistname");
let belowinfo=document.querySelector(".belowinfo");
let time=document.querySelector(".time");

let rp1songname=document.querySelector(".rp1songname");
let rp1artistname=document.querySelector(".rp1artistname");

let rp2songname=document.querySelector(".rp2songname");
let rp2artistname=document.querySelector(".rp2artistname");

let rp3songname=document.querySelector(".rp3songname");
let rp3artistname=document.querySelector(".rp3artistname");

let rp4songname=document.querySelector(".rp4songname");
let rp4artistname=document.querySelector(".rp4artistname");


song.onloadedmetadata = function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}

var index=0;
    function PlayorPause(){
    if(song.currentTime==song.duration){
        index=0;

    }
    if(index==0){
        song.play();
        index=1;
        x.innerHTML="";
        x.setAttribute("style",`background-image: url(pause.png)`);

    }else if(index==1){
        song.pause();
        index=0;
        x.setAttribute("style",`background-image: url(play.png)`);

    }
}



if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange=function(){
    song.currentTime=progress.value;
    song.play();
    x.setAttribute("style",`background-image: url(pause.png)`);

}


function playsong1(){
    x.setAttribute("style",`background-image: url(pause.png)`);
    album.setAttribute("style",`background-image: url(rp1.png)`);
    playersongname.innerHTML=rp1songname.innerHTML;
    playerartistname.innerHTML=rp1artistname.innerHTML;
    time.innerHTML = "03:23";
    belowinfo.innerHTML= "The Weeknd - Blinding Lights";
    song.src="blindinglights.mp3";
    song.play();


}

function playsong2(){
    x.setAttribute("style",`background-image: url(pause.png)`);
    album.setAttribute("style",`background-image: url(rp2.png)`);
    playersongname.innerHTML=rp2songname.innerHTML;
    playerartistname.innerHTML=rp2artistname.innerHTML;
    time.innerHTML = "02:50";
    belowinfo.innerHTML= "Ariana Grande - 34+35";
    song.src="3435.mp3";
    song.play();


}

function playsong3(){
    x.setAttribute("style",`background-image: url(pause.png)`);
    album.setAttribute("style",`background-image: url(rp3.png)`);
    playersongname.innerHTML=rp3songname.innerHTML;
    playerartistname.innerHTML=rp3artistname.innerHTML;
    time.innerHTML = "03:33";
    belowinfo.innerHTML= "Justin Bieber - Holy";
    song.src="holy.mp3";
    song.play();


}

function playsong4(){
    x.setAttribute("style",`background-image: url(pause.png)`);
    album.setAttribute("style",`background-image: url(rp4.png)`);
    playersongname.innerHTML=rp4songname.innerHTML;
    playerartistname.innerHTML=rp4artistname.innerHTML;
    time.innerHTML = "00:09";
    belowinfo.innerHTML= "George Michaels - Careless Whisper";
    song.src="rickroll.mp3";
    song.play();


}