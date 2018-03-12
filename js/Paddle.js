const Paddle =function(player,color)
{	
	const w=30
	const h=200

	const UP=-1
	const DOWN=1

	const x =player ===1 ? 0 :width -w
	let y=Math.floor(height/2)-Math.floor(h/2)

	let speed=10
	let score=0


	const getX=function (){return x}
	const getY=function(){return y}
	const getH=function(){return h}
	const getW=function(){return w}


	const edge=function(dir){
			return (dir=== UP && y>=0)||
			(dir===DOWN && y+h <= height)

		}

	const draw =function(){
		rectMode(CORNER)
		fill(color)
		rect(x,y,w,h)
}
		const move=function(dir){
			if(edge(dir)){
			y+=(speed*dir)}

		}
	const getScore=function(){
		return score
	}
	const updateScore=function(){
		 score++
	}


	return {
		draw,
		move,
		getX,
		getY,
		getH,
		getW,
		getScore,
		updateScore,
	}



}