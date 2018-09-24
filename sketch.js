function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(227, 236, 235);

	//lightright
	fill(200);
	stroke(200);
	quad(330, 385-50, 340, 420-50, 390, 420-50, 400, 385-50);
	fill(241, 246, 179);
	ellipseMode(CORNER);
	ellipse(330, 370-50, 70, 30);
	noStroke();
	fill(241, 246, 179, 70)
	//quad(330, 385-50, 400, 385-50, 180, 0, 50, 0);
	quad(330, 385-50, 400, 385-50, mouseX, 0, mouseY, 0);

	ellipseMode(CENTER);
	stroke(62,90,166);
	strokeWeight(1.5);
	fill(195,223,247);


	//Body
	rect(200, 225, 100, 100);
	fill(127,162,216);
	quad(190, 315, 200, 325, 200, 225, 190, 215); //parte sx
	quad(190, 215, 200, 225, 300, 225, 290, 215); //parte sopra


	//BodySmall
	fill(195,223,247);
	rect(230, 180, 40, 40);
	fill(127,162,216);
	quad(225, 215, 230, 220, 230, 180, 225, 175); //parte sx
	quad(225, 175, 230, 180, 270, 180, 265, 175); //parte sopra

	//mouth
	line(245, 285, 265, 285);

	//mouthSmall
	line(248, 205, 258, 205);

	//eyebrowsleft
	line(232, 260, 245, 260);

	//eyeleft
	ellipse(240, 261.8, 3, 3);

	//eyebrowsright
	line(275, 260, 262, 260);

	//eyeright
	ellipse(270, 261.8, 3, 3);

	//eyebrowsleftSmall
	line(243, 195, 249, 195);

	//eyeleftSmall
	ellipse(247, 196, 1, 1);

	//eyebrowsrightSmall
	line(257, 195, 263, 195);

	//eyerightSmall
	ellipse(261, 196, 1, 1);

	//leg1
	line(210, 325, 210, 380);

	//leg2
	line(290, 325, 290, 380);

	//foot1
	line(210, 380, 230, 390);

	//foot2
	line(290, 380, 270, 390);

	//rightarmBig
	strokeWeight(1.5);
	line(300, 270, 330, 290);

	//rightforearmBig
	line(330, 290, 270, 300);

	//leftarmBig
	line(195, 270, 170, 290);

	//leftforearmBig
	line(170, 290, 240, 300);

	//rightarmSmall

	line(270, 195, 280, 205);

	//rightforearmSmall
	line(280, 205, 260, 210);

	//leftarmSmall
	line(227, 195, 218, 205);

	//leftforearmSmall
	line(218, 205, 245, 210);

	//lefthandBig
	//strokeWeight(1);
	fill(62,90,166);
	ellipse(240, 301, 5, 5);
	line(242.5, 304, 250, 308);
	line(244, 301.5, 252, 304);
	line(243, 299, 252, 300);


	//righthandBig
	ellipse(266, 301, 5, 5);
	line(264.5, 304, 256, 308);
	line(262, 301.5, 254, 304);
	line(263, 299, 254, 300);

	//righthandSmall
	ellipse(258, 210.5, 3, 3);
	line(258, 211, 254.5, 212.5);
	line(258.5, 210, 254, 210);

	//lefthandSmall
	ellipse(248, 210.5, 3, 3);
	line(248, 211, 251.5, 212.5);
	line(248.5, 210, 252, 210);

	//lightleft
	fill(200);
	stroke(200);
	quad(100, 385, 110, 420, 160, 420, 170, 385);
	fill(247, 216, 215);
	ellipseMode(CORNER);
	ellipse(100, 370, 70, 30);
	noStroke();
	fill(247, 216, 215, 70),
	//quad(100, 385, 170, 385, 430, 0, 300, 0);
	quad(100, 385, 170, 385, mouseX, 0, mouseY, 0);


}
