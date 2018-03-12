const ball=function(){
	const r=20
	let x=Math.floor(width/2)
	let	y=Math.floor(height/2)
	let speedX=10*randomMove()
	let speedY =10*randomMove()

	const reset =function(){
		x=Math.floor(width/2)
		y=Math.floor(height/2)

		speedY*=randomMove()
		speedX*=randomMove()
	}

	const draw =function (){
		ellipseMode(CENTER)
		fill('#fff')
		noStroke()
		
		ellipse(x,y,r*2,r*2)

	}
	const move =function(){
		x+=speedX
		y+=speedY
		verifi()
		
	}

	const collison=function(player){
		let dx =Math.abs(x-player.getX()-player.getW()/2)
		let dy =Math.abs(y-player.getY()-player.getH()/2)

		if (dx>player.getW()/2+r|| dy>player.getH()/2+r)
			{return false}
		if(dx<player.getW()/2 || dy<player.getH()/2){
			speedX*=-1
			return true
		}
	}

	const verifi=function(){
		 if (y-r <= 0 ||y+r >= height) {
		 	speedY *= -1; 

		 }
    	
	}

	const checkScore =function(){
		if(x-r<0){
			reset()
			return 2
		}
		if(x+r>width){
			reset()
			return 1
		}
		return 0
	}

	function randomMove(){
		return Math.round(Math.random())*2-1
	}
	return{
		draw,
		move,
		collison,
		checkScore,
	}
}