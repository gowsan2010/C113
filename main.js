function preload(){
}
function setup(){
    canvas = createCanvas(950, 1000);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 300, 200, 320, 240);
    fill('red');
    circle(50,45,80);
    fill('orange');
    rect(25,70,50,500);
    fill('pink');
    circle(870,45,80);
    fill('purple');
    rect(845,70,50,500);
    fill('yellow');
    circle(50,600,80);
    fill('lightgreen');
    rect(75,20,770,50);
    fill('blue');
    circle(870,600,80);
    fill('green');
    rect(75,580,770,50); 
}
   function take_snapshot(){
    save('take,pose,enjoy');
}