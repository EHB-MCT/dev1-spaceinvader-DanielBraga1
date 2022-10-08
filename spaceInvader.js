"use strict";


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawbox();

function drawbox() {
    context.fillStyle = "black";
    context.beginPath();
    context.rect(50, 50, 300, 300);
context.fill();    

context.stroke();
context.strokeStyle = "pink";
context.fillStyle = "pink"
context.beginPath();
    context.rect(100, 100, 200, 50);
    context.rect(100, 175, 200, 100);
    context.rect(135, 275, 50, 50);
    context.rect(210, 275, 50, 50);
context.fill();    


    context.stroke();

}