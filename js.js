


var boolCheck=false;
var Player1=document.getElementById('Player1');
var Video1=document.getElementById('VideoPlayer');
var VideoAudio=document.getElementById('VideoAudio');

function HoverBox (mp3){
    if(!boolCheck)
    {
        Player1.src="sounds/"+mp3;
        Player1.type="audio/mp3";
        Player1.play();
        boolCheck=true;
    }
}

function MousOut() {
    if(boolCheck)
    {
        Player1.src="";
        Player1.type="";
        Player1.pause();
        boolCheck=false;
    }
}

function ShowVideo(vid)
{

    Video1.src="videos/"+vid;
    Video1.type="video/.mp4";
    document.getElementById('DivOfVideo').style.display="inline";
    document.body.style['overflow-x'] = 'hidden';
    Video1.play();
    VideoAudio.src="sounds/"+vid+".mp3";
    VideoAudio.type="audio/mp3";
    VideoAudio.play();

    //disableScroll();
}

document.getElementById('Gamosartveli').onclick=function ()
{
    Video1.pause();
    Video1.src="";
    Video1.type="";
    VideoAudio.src="audio/mp3";
    VideoAudio.type=
    document.getElementById('DivOfVideo').style.display="none";
    document.body.style['overflow-x'] = 'visible';
}

document.getElementById('DivOfVideo').onmousemove=function() {
    var i=0;
    var interval=setInterval(function() {
        i++;
        document.getElementById('Gamosartveli').style.display="inline";
        if(i==100)
        {
            document.getElementById('Gamosartveli').style.display="none"
            clearInterval(interval);
        }
    },1)

}


