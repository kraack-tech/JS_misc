//global vars
var secLength = 160;
var secWidth = 1;
var minLength = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;

function setup() {
    createCanvas(900, 600);
    background(0);
}

function draw() {
    background(255);
    translate(width/2, height/2); //translate to center of the screen as midpoint from here on. (use push/pop to differentiate)
    stroke(0);
    push();
    fill(230, 230, 230)
    ellipse(0,0,400,400)
    pop();

    ellipse(0,0,350,350)


    //seconds line
    push(); //protect rest of canvas/stuff
    strokeWeight(secWidth);
    stroke(200,0,0);
    var secAngle = map(second(), 0, 60, 0, 360);  //convert second to degrees...
    rotate(radians(secAngle));
    line(0, 0, 0, -secLength);
    pop();

    //minute line
    push(); //protect rest of canvas/stuff
    strokeWeight(minWidth);
    stroke(0); //make black (not neccesary because of push/pop in seconds though.)
    var minAngle = map(minute(), 0, 60, 0, 360);  //convert minutes to degrees...
    rotate(radians(minAngle));
    line(0, 0, 0, -minLength);
    pop();
    
    //house line
    push(); //protect rest of canvas/stuff
    strokeWeight(hourWidth/1.2);
    stroke(100); //make black (not neccesary because of push/pop in seconds though.)
    var hourAngle = map(hour(), 0, 12, 0, 360);  //convert hour to degrees... (use half day)
    rotate(radians(hourAngle));
    line(0, 0, 0, -hourLength);
        //nested transformation with the hour line: 
        push();
        translate(0, -hourLength+20);  //translate to end of hourlength
        ellipse(0, 0 , 15, 15);
        pop();
    pop();

    //adds hour marks to the clock
    var hours=12; //no. of hours on the clock
    var hourStep=360/hours; //calculate degrees on clock to rotate.
    //add mark to each hour, fro 0 to hours=12.
    for (var i=1; i<hours+1; i++){ 
        push();
        rotate(radians(hourStep * i)); //adds the mark, i.e. 30*1, 30*2...
        translate(0, -155); //go from circle line and towards inside of the circle 
        line(0,0,0,-20);
        text(1*i,-6,15)
        pop();
    }
}
