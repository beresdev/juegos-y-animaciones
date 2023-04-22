let screen = document.querySelector('canvas');
let pincel = screen.getContext('2d');

pincel.fillStyle = "white" //propiedad
pincel.fillRect(0,0,600,400); //función

pincel.fillStyle = "green"
pincel.fillRect(0,0,200,400);

pincel.fillStyle = "red";
pincel.fillRect(400,0,200,400);

// pincel.fillStyle = "black";
// pincel.beginPath();
// pincel.moveTo(300,200);
// pincel.lineTo(200,400);
// pincel.lineTo(400,400);
// pincel.fill();

pincel.fillStyle = "#6C5011";
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2*3.14);
pincel.fill();