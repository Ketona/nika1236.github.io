var boolCheck=false;
var Player1=document.getElementById('Player1');
var Video1=document.getElementById('VideoPlayer');

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
    //disableScroll();
}

document.getElementById('Gamosartveli').onclick=function ()
{
    Video1.pause();
    Video1.src="";
    Video1.type="";
    document.getElementById('DivOfVideo').style.display="none";
    document.body.style['overflow-x'] = 'visible';
}

