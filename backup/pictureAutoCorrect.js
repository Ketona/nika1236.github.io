/**
 * Created by Nikusha on 3/16/14.
 */
    var boxscene=document.getElementsByClassName('box-scene'),
        box=document.getElementsByClassName('box'),
        side=document.getElementsByClassName('side');
var uniwin = {
    width: window.innerWidth || document.documentElement.clientWidth
        || document.body.offsetWidth,
    height: window.innerHeight || document.documentElement.clientHeight
        || document.body.offsetHeight
};
 function getWindowSize()
{
 uniwin = {
    width: window.innerWidth || document.documentElement.clientWidth
        || document.body.offsetWidth,
    height: window.innerHeight || document.documentElement.clientHeight
        || document.body.offsetHeight
             };
}

var res;
window.onresize=function() {
    if (res){clearTimeout(res)};
    res = setTimeout(function(){ResizeDiv();},1);
};

window.onload=ResizeDiv();

function ResizeDiv()
{
    getWindowSize();
    for(var i=0;i<boxscene.length;i++)
    {
        document.getElementById('Container').style.width=parseFloat(uniwin.width)*96.5/100+'px'
        //სიგანის ჩასწორება
    boxscene[i].style.width=parseFloat(uniwin.width)*25*96.5/10000+'px';
    box[i].style.width=parseFloat(uniwin.width)*25*96.5/10000+'px';
    side[i].style.width=parseFloat(uniwin.width)*25*96.5/10000+'px';
        //ტოპი
    side[i].style.top=parseFloat(uniwin.width)*25*96.5/10000+'px';

        //სიგრძის ჩასწორება
        boxscene[i].style.height=parseFloat(uniwin.width)*25*96.5/10000+'px';
        box[i].style.height=parseFloat(uniwin.width)*25*96.5/10000+'px';
        side[i].style.height=parseFloat(uniwin.width)*25*96.5/10000+'px';

        //იმ რაღცის შეცვლა!
        var blablu=parseFloat(uniwin.width)*25*96.5/20000;
        box[i].style.webkitTransformOrigin=blablu+"px "+blablu+"px -"+blablu+"px";
    }
}
