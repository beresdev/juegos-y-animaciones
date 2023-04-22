let screen = document.querySelector('canvas');
let pincel = screen.getContext('2d');

pincel.fillStyle = "white" //propiedad
pincel.fillRect(0,0,600,400); //función

pincel.fillStyle = "green"
pincel.fillRect(0,0,200,400);

pincel.fillStyle = "red";
pincel.fillRect(400,0,200,400);