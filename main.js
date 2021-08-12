canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
color="black";
width=1;
var lastx,lasty;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("t1").value;
    width=document.getElementById("t2").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last position of x and y=");
        console.log("x="+lastx+"y="+lasty);
        ctx.moveTo(lastx,lasty);
        console.log("current positiong of mouse x and y");
        console.log("x="+currentx+"y="+currenty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx;lasty=currenty;
}