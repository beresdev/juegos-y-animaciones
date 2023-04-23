let screen = document.querySelector('canvas');
let pincel = screen.getContext('2d');

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.moveTo(50,50);
pincel.lineTo(50,400);
pincel.lineTo(400,400);
pincel.fill();
pincel.stroke();

pincel.fillStyle = 'azure';
pincel.beginPath();
pincel.moveTo(100,175);
pincel.lineTo(100, 350);
pincel.lineTo(275,350);
pincel.fill();
pincel.stroke();