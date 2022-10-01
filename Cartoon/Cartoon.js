changeCanvasColor = function () {
  var canvas = document.getElementById("mycanvas");
  var context = canvas.getContext("2d");

  //Background Color
  context.fillStyle = "skyblue";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //Sun
  context.beginPath();
  context.arc(750, 100, 80, 0, Math.PI * 2, true);
  context.fillStyle="yellow";
  context.fill();

  
  //Cloud 1
  var x = 75;
  var y = 100;
    context.beginPath(); 
    context.moveTo(x, y);
    context.bezierCurveTo(x - 40, y + 20, x - 40, y + 70, x + 60, y + 70);
    context.bezierCurveTo(x + 80, y + 100, x + 150, y + 100, x + 170, y + 70);
    context.bezierCurveTo(x + 250, y + 70, x + 250, y + 40, x + 220, y + 20);
    context.bezierCurveTo(x + 260, y - 40, x + 200, y - 50, x + 170, y - 30);
    context.bezierCurveTo(x + 150, y - 75, x + 80, y - 60, x + 80, y - 30);
    context.bezierCurveTo(x + 30, y - 75, x - 20, y - 60, x, y);
    context.closePath();
    context.fillStyle="white";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "white";
    context.stroke();
  
    //Cloud 2
    var x = 400;
    var y = 100;
      context.beginPath(); 
      context.moveTo(x, y);
      context.bezierCurveTo(x - 40, y + 20, x - 40, y + 70, x + 60, y + 70);
      context.bezierCurveTo(x + 80, y + 100, x + 150, y + 100, x + 170, y + 70);
      context.bezierCurveTo(x + 250, y + 70, x + 250, y + 40, x + 220, y + 20);
      context.bezierCurveTo(x + 260, y - 40, x + 200, y - 50, x + 170, y - 30);
      context.bezierCurveTo(x + 150, y - 75, x + 80, y - 60, x + 80, y - 30);
      context.bezierCurveTo(x + 30, y - 75, x - 20, y - 60, x, y);
      context.closePath();
      context.fillStyle="white";
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = "white";
      context.stroke();
  //Cloud 3
  var x = 900;
  var y = 100;
    context.beginPath(); 
    context.moveTo(x, y);
    context.bezierCurveTo(x - 40, y + 20, x - 40, y + 70, x + 60, y + 70);
    context.bezierCurveTo(x + 80, y + 100, x + 150, y + 100, x + 170, y + 70);
    context.bezierCurveTo(x + 250, y + 70, x + 250, y + 40, x + 220, y + 20);
    context.bezierCurveTo(x + 260, y - 40, x + 200, y - 50, x + 170, y - 30);
    context.bezierCurveTo(x + 150, y - 75, x + 80, y - 60, x + 80, y - 30);
    context.bezierCurveTo(x + 30, y - 75, x - 20, y - 60, x, y);
    context.closePath();
    context.fillStyle="white";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "white";
    context.stroke();

  
  //Ground
  context.fillStyle = "darkgreen";
  context.fillRect(0, 480, canvas.width, canvas.height);

  //House
  context.beginPath(); 
  context.fillStyle="red";
  context.fillRect(900,280,200,200);
  context.fill();

  context.beginPath(); 
  context.moveTo(1000, 200); 
  context.lineTo(900, 280); 
  context.lineTo(1100, 280); 
  context.fillStyle="darkred";
  context.fill(); 

  //Windows
  context.beginPath(); 
  context.fillStyle="orange";
  context.fillRect(920,300,50,50);
  context.fillRect(1030,300,50,50);
  context.fill();

  //Door
  context.beginPath(); 
  context.fillStyle="pink";
  context.fillRect(975,380,50,100);
  context.fill();

  //Fence
  context.beginPath(); 
  context.fillStyle="tan";
  for (let i = 825; i < 1175; i=i+20) {
      context.fillRect(i,430,10,50);
  }
  
  //tree1
  context.fill();
  context.strokeStyle = "#725c42";
  context.fillStyle = "#725c42";
  context.fillRect(450, 300, 40, 180);
  context.fill();
  context.stroke();
  
  context.beginPath();
  context.arc(475, 300, 50, 0, Math.PI * 2, false);
  context.strokeStyle = "#3A5F0B";
  context.fillStyle = "#3A5F0B";
  context.fill();
  context.stroke();
  context.closePath();

}
document.addEventListener('DOMContentLoaded', changeCanvasColor);