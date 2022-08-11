function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}
function setup(){
canvas = createCanvas(280,280);
canvas.position(550, 300);
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}
function draw(){
strokeWeight(10);
stroke(0);
if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}
function clear_canvas(){
    background("white");
}
function classifyCanvas(){
classifier.classify(canvas, gotResult);
}
function gotResult(error, results){
if (error) {
    console.error(error);
}
console.log(results);
document.getElementById('lbl1').innerHTML = 'Label : ' +results[0].label;
document.getElementById('con1').innerHTML = 'confidence : ' +Math.round(results[0].confidence *100 )+'%';

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}