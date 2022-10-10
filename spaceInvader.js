"use strict";


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawbox();

function drawbox() {
    context.fillStyle = "black";
    context.beginPath();
    context.rect(0, 0, 300, 300);
context.fill();    

context.stroke();
context.strokeStyle = "green";
context.fillStyle = "green";
context.beginPath();
    context.rect(50, 50, 50, 50);
    context.rect(100, 50, 50, 50);
    context.rect(150, 50, 50, 50);
    context.rect(200, 50, 50, 50);

    context.rect(50, 150, 50, 50);
    context.rect(100, 150, 50, 50);
    context.rect(150, 150, 50, 50);
    context.rect(200, 150, 50, 50);

    context.rect(50, 200, 50, 50);
    context.rect(100, 200, 50, 50);
    context.rect(150, 200, 50, 50);
    context.rect(200, 200, 50, 50);

    context.rect(90, 250, 50, 50);
    context.rect(170, 250, 50, 50);


context.fill();    


    context.stroke();

}