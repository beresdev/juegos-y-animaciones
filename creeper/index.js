let screen = document.querySelector('canvas');
let pincel = screen.getContext('2d');

pincel.fillStyle = "darkgreen"
pincel.fillRect(125,50,350,300);


pincel.fillStyle = "black";

// eyes
pincel.fillRect(175,90,90,90);
pincel.fillRect(335,90,90,90);

//nouse
pincel.fillRect(265,180,70,100);

//mouth
pincel.fillRect(225,240,40,110);
pincel.fillRect(335,240,40,110);