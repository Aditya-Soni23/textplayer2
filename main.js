function setup(){
    canvas = createCanvas(550,550);
    canvas.position(800,100);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#fcba03');
}

function modelLoaded(){
    console.log('poseNet is Initialized!');
}


function gotPoses(){
    if(results.length > 0){
        console.log(results);
    }
}