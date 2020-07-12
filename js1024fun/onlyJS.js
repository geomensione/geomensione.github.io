var n_tile = 6,
	l_edge = (a.width>a.height)?a.height/n_tile:a.width/n_tile, 
	x = y = 0,
	board = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
	winboard = [0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0],
	loseboard = [0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0],
	level = 1,
	time = 500,
	gx = gy = 0;


a.onmouseup = function(e){
	console.log('mouseup')
	ex = e.offsetX;
	ey = e.offsetY;
	game(ex,ey);
}
a.ontouchend = function(e){
  ex = e.touches[0].clientX;
  ey = e.touches[0].clientY;
  game(ex,ey);
}
var game = function(x,y){
	if(x<=(l_edge*n_tile) && y<=(l_edge*n_tile)){
		gx = Math.floor(x/l_edge);
		gy = Math.floor(y/l_edge);
		board[gy*n_tile+gx] = 0;
		c.beginPath();
		c.fillStyle = "blue";
		c.fillRect(gx*l_edge, gy*l_edge, l_edge, l_edge);
		c.stroke();
	}
}
var drawBoard = function(){
	for(let ty = 0;ty<n_tile;ty++){
		for(let tx = 0;tx<n_tile;tx++){
			c.beginPath();
			c.fillStyle = (board[ty*n_tile+tx])?"orange":"blue";
			c.fillRect(x, y, l_edge, l_edge);
			x+=l_edge;
			c.stroke();
		}
		y+=l_edge;
		x=0;
	}
	x=y=0;
}
var loopFn = function(){
	drawBoard();
	if(board.every( (val, i, arr) => val === arr[0] )){
		clearInterval(loop)
		if(board[0] == 1 ){
			board = loseboard;
		}else{
			board = winboard;
		}
		drawBoard()
	}else{
		for(let b = 0;b<level;b++){
			ux = Math.floor(Math.random() * (n_tile - 0)) + 0;
			uy = Math.floor(Math.random() * (n_tile - 0)) + 0;
			updateGameArray(ux,uy);
		}
	}
}
var updateGameArray = function(x,y){
	if(board[y*n_tile+x]){
		ux = Math.floor(Math.random() * (n_tile - 0)) + 0;
		uy = Math.floor(Math.random() * (n_tile - 0)) + 0;
		updateGameArray(ux,uy);
	}else{
		board[y*n_tile+x] = 1;
	}
}
var loop = setInterval((e)=>{
	loopFn();
},time)