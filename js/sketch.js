
let Ball
let Player1
let Player2

const UP=-1
const DOWN=1

function setup (){
	createCanvas(windowWidth,windowHeight)
	Ball = new ball()
	Player1= new Paddle(1,'red')
	Player2= new Paddle(2,'blue')

}

function draw(){
		background('black')
		crearTablero();
		scoreText();

		Ball.draw()
		Ball.move()
		if(Ball.collison(Player1)||Ball.collison(Player2)){
			Ball.move()}

		let checkScore=Ball.checkScore()

		if(checkScore===2)
		{
			Player2.updateScore()
		}
		else if(checkScore===1){Player1.updateScore()}

		Player1.draw()
		Player2.draw()

		if(keyIsPressed){
			if(keyIsDown(87)){Player1.move(UP)}
			if(keyIsDown(83)){Player1.move(DOWN)}
			if(keyIsDown(UP_ARROW)){Player2.move(UP)}
			if(keyIsDown(DOWN_ARROW)){Player2.move(DOWN)}


		}

		
		
}



function crearTablero(){
	for (let i = 0 ; i <= windowWidth/2; i++) {
		fill("white")
		rect(windowWidth/2,i*90,30,50)
	}
}
function scoreText()
{
    fill(255);
    textSize(width/20);
    text(Player1.getScore(), width*0.25 , 70);
    text(Player2.getScore(), width*0.75, 70);    
    //if (usuarioPuntos==3){text("gano usuario",width/10 * 3, height/5); stop();}
    //if (enemigoPuntos==3){text("gano maquina",width/10*3,height/5); stop();}
}

const randColor =function(){
	return color(random(255),random(255),random(255))
}