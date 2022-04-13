noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#f0b30c');
    fill('#a34dff');
    stroke('#e0564c');
    square(noseX,noseY,difference);

}

function modelLoaded(){
console.log('poseNet is working');
}

function gotPoses(results){
    if(results.lenght>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX =" +  leftWristX + "rightWristX =" + rightWristX + "difference = " + difference);
    }
}