function preload(){
    song=loadSound("music.mp3")
    song2=loadSound("BTS - Save Me.mp3")
}

function setup(){
    canvas=createCanvas(600,450)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)
}
var rightWristX=0
var rightWristY=0
var leftWristX=0
var leftWristY=0
var scoreRightWrist=0
var scoreLeftWrist=0
var song=""
var song2=""
function modelloaded(){
    console.log("modelloaded")
}
function gotPoses(results){
console.log(results)
if (results.length>0) {
    scoreRightWrist=results[0].pose.keypoints[10].score
    scoreLeftWrist=results[0].pose.keypoints[9].score
    rightWristX=results[0].pose.rightWrist.x
    rightWristY=results[0].pose.rightWrist.y
    leftWristX=results[0].pose.leftWrist.x
    leftWristY=results[0].pose.leftWrist.y

}
}
function draw(){
image(video,0,0,600,500)
fill ("red")
stroke("red")
if (scoreRightWrist>0.2) {
    circle(rightWristX,rightWristY,20)
    song.play()
    song.setVolume(1)
    song.rate(1)
    song2.stop()
}
if (scoreLeftWrist>0.2) {
    circle(leftWristX,leftWristY,20)
    song2.play()
    song2.setVolume(1)
    song2.rate(1)
    song.stop()
    
}
}
