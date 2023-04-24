let screen = document.querySelector('canvas');
let pincel = screen.getContext('2d');

let side = 50;
let w = 900;
let h = 1000;
let centerX = w/2;
let centerY = h/2; 

function drawRombus(xi, yi, x1, y1, x2, y2, x3, y3, x4, y4, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(xi, yi);
    pincel.lineTo(x1, y1);
    pincel.lineTo(x2, y2);
    pincel.lineTo(x3, y3);
    pincel.lineTo(x4, y4);
    pincel.stroke();
    pincel.fill();
}


function drawCube(side, xi, yi, colorLigth, colorMedium, colorDark) {
    let edge = side * 1.5;
    let Ax = xi;
    let Ay = yi;

    let Bx = xi - edge;
    let By = yi + side;

    let Cx = xi;
    let Cy = yi + side*2;

    let Dx = xi + edge;
    let Dy = By;

    let Ex = Bx;
    let Ey = By + edge;

    let Fx = xi;
    let Fy = Cy + edge;

    let Gx = Dx;
    let Gy = Ey;

    drawRombus(xi,yi, Bx, By, Cx, Cy,Dx, Dy, Ax, Ay, colorLigth);
    drawRombus(Bx, By, Ex, Ey, Fx, Fy, Cx, Cy, Bx, By, colorMedium);
    drawRombus(Cx, Cy, Dx, Dy, Gx, Gy, Fx, Fy, Cx, Cy, colorDark);
}

drawCube(side, centerX - (7.5*side), centerY - (11*side), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX - (4.5*side), centerY - (11*side), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX - (1.5*side), centerY - (11*side), '#87FA6C', '#3AE014', '#196109');
drawCube(side, centerX + (1.5*side), centerY - (11*side), '#B3E6E3', '#75EAE4', '#0E6B66');
drawCube(side, centerX + (4.5*side), centerY - (11*side), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX + (7.5*side), centerY - (11*side), '#E999FB', '#DA4DFA', '#6B267A')

drawCube(side, centerX - (9*side), centerY - (8.5*side), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX - (6*side), centerY - (8.5*side), '#87FA6C', '#3AE014', '#196109');
drawCube(side, centerX - (3*side), centerY - (8.5*side), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX, centerY - (8.5*side), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX + (3*side), centerY - (8.5*side), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX + (6*side), centerY - (8.5*side), '#87FA6C', '#3AE014', '#196109');
drawCube(side, centerX + (9*side), centerY - (8.5*side), '#B3E6E3', '#75EAE4', '#0E6B66');

drawCube(side, centerX - (7.5*side), centerY - (6*side), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX - (4.5*side), centerY - (6*side), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX - (1.5*side), centerY - (6*side), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX + (1.5*side), centerY - (6*side), '#87FA6C', '#3AE014', '#196109');
drawCube(side, centerX + (4.5*side), centerY - (6*side), '#B3E6E3', '#75EAE4', '#0E6B66');
drawCube(side, centerX + (7.5*side), centerY - (6*side), '#BFEBFF', '#43C0FA', '#1D80AD');

drawCube(side, centerX - (9*side), centerY - (side*3.5), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX - (6*side), centerY - (side*3.5), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX - (3*side), centerY - (side*3.5), '#87FA6C', '#3AE014', '#196109');
drawCube(side, centerX, centerY - (side *3.5), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX + (3*side), centerY - (side*3.5), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX + (6*side), centerY - (side*3.5), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX + (9*side), centerY - (side*3.5), '#87FA6C', '#3AE014', '#196109');

drawCube(side, centerX - (7.5*side), centerY - side, '#B3E6E3', '#75EAE4', '#0E6B66');
drawCube(side, centerX - (4.5*side), centerY - side, '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX - (1.5*side), centerY - side, '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX + (1.5*side), centerY - side, '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX + (4.5*side), centerY - side, '#87FA6C', '#3AE014', '#196109');
drawCube(side, centerX + (7.5*side), centerY - side, '#B3E6E3', '#75EAE4', '#0E6B66');

drawCube(side, centerX - (9*side), centerY + (side*1.5), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX - (6*side), centerY + (side*1.5),'#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX - (3*side), centerY + (side*1.5), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX, centerY + (side*1.5), '#87FA6C', '#3AE014', '#196109');
drawCube(side, centerX + (3*side), centerY + (side*1.5), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX + (6*side), centerY + (side*1.5), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX + (9*side), centerY + (side*1.5), '#F76D60', '#F52815', '#75130B');

drawCube(side, centerX - (7.5*side), centerY + (side*4), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX - (4.5*side), centerY + (side*4), '#B3E6E3', '#75EAE4', '#0E6B66');
drawCube(side, centerX - (1.5*side), centerY + (side*4), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX + (1.5*side), centerY + (side*4), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX + (4.5*side), centerY + (side*4), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX + (7.5*side), centerY + (side*4), '#87FA6C', '#3AE014', '#196109');

drawCube(side, centerX - (9*side), centerY + (side*6.5), '#B3E6E3', '#75EAE4', '#0E6B66');
drawCube(side, centerX - (6*side), centerY + (side*6.5), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX - (3*side), centerY + (side*6.5), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX, centerY + (side*6.5), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX + (3*side), centerY + (side*6.5), '#87FA6C', '#3AE014', '#196109');
drawCube(side, centerX + (6*side), centerY + (side*6.5), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX + (9*side), centerY + (side*6.5), '#E999FB', '#DA4DFA', '#6B267A');

drawCube(side, centerX - (7.5 * side), centerY + (side*9), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX - (4.5*side), centerY + (side*9), '#F76D60', '#F52815', '#75130B');
drawCube(side, centerX - (1.5*side), centerY + (side*9), '#B3E6E3', '#75EAE4', '#0E6B66');
drawCube(side, centerX + (1.5*side), centerY + (side*9), '#BFEBFF', '#43C0FA', '#1D80AD');
drawCube(side, centerX + (4.5*side), centerY + (side*9), '#E999FB', '#DA4DFA', '#6B267A');
drawCube(side, centerX + (7.5 * side), centerY + (side*9), '#F76D60', '#F52815', '#75130B');