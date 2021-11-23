img="";
new_status="";
object=[];
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(450,100);
objectdetector=ml5.objectDetector("cocossd",modelLoaded);

}
function draw(){
image(img,0,0,500,500);
if (new_status!=""){
    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="Status: Object Detected";  
        fill("red");
        percent= floor(object[i].confidence * 100);
        text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
        noFill();
        stroke("yellow");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
}
function modelLoaded(){
    console.log("Model is Loaded");
    new_status="true";
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    objectdetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object=results;

    }
}
