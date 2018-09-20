function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(240);
	fill(255,0,0);
	stroke(200,0,0);

	//Body
	rect(200, 225, 100, 100);

	//mouth
	line(240, 285, 260, 285);

	//eyebrows1
	line(230, 260, 240, 260);

	//eye1
	ellipse(235, 261.5, 2, 2);

	//eyebrows2
	line(270, 260, 260, 260);

	//eye2
	ellipse(265, 261.5, 2, 2);

	//leg1
	line(210, 325, 210, 380);

	//leg2
	line(290, 325, 290, 380);

	//foot1
	line(210, 380, 230, 390);

	//foot2
	line(290, 380, 270, 390);

	//arm2
	line(300, 270, 330, 290);

	//forearm2
	line(330, 290, 270, 300);

	triangle(190, 100, 200, 100, 200, 80);


	//Wheel
	//ellipse(250, 465, 70, 70);



	//Head
	//ellipse(250, 140, 90, 90);
}
