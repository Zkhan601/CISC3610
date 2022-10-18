var canvas = document.getElementById("myCanvas");
var c = canvas.getContext('2d');

var air = [];
air.length = 44;

for(var i = 1 ; i < air.length ; i++){
    air[i] = new Image();
    air[i].src = 'img/airplane' + i.toString() + '.png';
}
var i = 1;

const myInterval = setInterval(myTimer,100);
function myTimer(){
    i++;
    if( i >= 44){
        i = 1;
    }
    //background
    img = new Image();
    img.src = 'img/Background.png';
//talking bubbles
    bubble = new Image();
    bubble.src = 'img/textbubble.png';

    c.drawImage(img, 0, 0,1000,700);
    c.drawImage(air[i],50,150,970,450);
    c.drawImage(bubble,770,40,200,250);

}

