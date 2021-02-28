const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext(`2d`);
const colors = document.getElementsByClassName("jsColor");
const brush = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

ctx.fillStyle="white"
ctx.fillRect(0,0,500,500);

canvas.width=500;
canvas.height=500;

ctx.strokeStyle = "black";
ctx.fillStyle = "black"
ctx.lineWidth = "2.5";

let painting= false;

function mouseMoving(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function mouseDrawing(event){
    painting = true;

}
function handleCanvasColor(){
    if (mode.innerText ==="PAINT"){
    ctx.fillRect(0,0,500,500);
    } else{

    }
}

function mouseStopDrawing(event){
    painting = false;
}
if (canvas){
    canvas.addEventListener("mousemove", mouseMoving);
    canvas.addEventListener("mousedown", mouseDrawing);
    canvas.addEventListener("mouseup", mouseStopDrawing);
    canvas.addEventListener("mouseleave",mouseStopDrawing);
    canvas.addEventListener("click", handleCanvasColor);
}

function handleMouseClick(event){
    color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleBrushChange(event){
    const brushSize = event.target.value;
    ctx.lineWidth=brushSize;
}


Array.from(colors).forEach(colors => addEventListener("mousedown",handleMouseClick));



if(brush){
    brush.addEventListener("input", handleBrushChange);
}

function handleModeClick(event){
    const Filling = event.target.textContent;
   if (Filling === "FILL"){
       mode.innerText = "PAINT"

   } else{
        mode.innerText = "FILL"
   };

}
function handleSaveClick(){
   const Save = event.target.textContent;
    if(Save === "SAVE"){
        const imageToDL = (canvas.toDataURL(`image/png`));
        const link = document.createElement("a");
        link.href = imageToDL;
        link.download = "Download";
        link.click();
    }

   }


if (mode){
    mode.addEventListener("click", handleModeClick);
}

if(save) {
    save.addEventListener("click",handleSaveClick);
}