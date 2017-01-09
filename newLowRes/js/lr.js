var lr = {};
var cicle = {};
var h = {};
var armature_sound = new Audio("sounds/hit_armature.mp3");
var glitch_sound = new Audio("sounds/hit_glitch.mp3");
var spawn_sound = new Audio("sounds/spawn.mp3");

function grid(r){
	var w = lr['w'];
	var h = lr['h'];
	var ox, oy = 0;
	if(h<w){
		ox = Math.round(h/r);
		lr['ry'] = Math.round(h/ox);
		lr['rx'] = Math.round(w/ox);
	}else{
		ox = Math.round(w/r);
		lr['rx'] = Math.round(w/ox);
		lr['ry'] = Math.round(h/ox);
	}
	lr['o'] = ox;
	lr['fb'] = new Array();
	var rx = lr['rx'];
	var ry = lr['ry'];
	for(var i = 0;i<rx;i++){
		lr['fb'][i] = new Array();
		for(var d = 0;d<ry;d++){
			lr['fb'][i][d] = ['00', '00', '00'];
		}
	}
	
	
}

function drawLetter(x, y, chr, c) {
	var l = chars[chr];
    if(!l) { return 0; }
	for(var i=0; i < l[0].length; i++) {
		for(var j=0; j < l.length; j++) {
			if(l[j].charAt(i) === "1") {
				lr['fb'][x+i][y+j] = [c[0],c[1],c[2]];
			}
		}
	}
	return l[0].length;
}

function drawText(text) {
	var x = 0;
	var y = Math.round(lr['ry']/2);
	for(var i=0; i < text.length; i++) {
        x += drawLetter(x, y, text.charAt(i), rgb['blue']) + 1;
    }
}

function clear(text){
	var rx = lr['rx'];
	var ry = lr['ry'];
	if(text === ''){
		var back_color = lr['index_background']%2;
		for(var i = 0;i<rx;i++){
			for(var d = 0;d<ry;d++){
				var color = lr['background'][lr['size']][back_color];
				lr['fb'][i][d] = [color, color, color];
			}
		}
		lr['index_background'] = back_color+1;
	}else{
		drawText(text);
	}
	
}

function draw(){
	var c = document.getElementById("gameScreen");
	var ctx = c.getContext("2d");
	var rx = lr['rx'];
	var ry = lr['ry'];
	var o = lr['o'];
	var coordx = 0, coordy = 0;
	for(var i = 0;i<rx;i++){
		//black = !black;
		for(var d = 0;d<ry;d++){
			ctx.fillStyle = "#"+lr['fb'][i][d][0]+lr['fb'][i][d][1]+lr['fb'][i][d][2];
			ctx.fillRect(coordx,coordy,o,o);
			coordy += o;
		}
		coordx += o;
		coordy = 0;
	}
}

function rand(max) {
  return Math.floor(Math.random() * max);
}

function update(){
	lr['time'] += 1;
	lr['fortune'] = rand(5);
	if(lr['time'] > lr['framerate']){
		var enemy_lenght = lr['fallingitem'].lenght?lr['fallingitem'].lenght:0;
		if(lr['fortune'] === enemy_lenght){
			var a = new armature(rand(lr['rx']));
			lr['fallingitem'].push(a);
		}else{
			var g = new glitch(rand(lr['rx']));
			lr['fallingitem'].push(g);
		}
		spawn_sound.play();
		lr['time'] = 0;
	}
	
	var enemy_length = lr['fallingitem'].length?lr['fallingitem'].length:0;
	for(var i = 0;i<enemy_length;i++){
		if(lr['fallingitem'][i])
			lr['fallingitem'][i].drawSprite(i);
	}
	
}

function go_left(){
	if((lr['heroposx']<=0) === false){
		lr['heroposx']-=1;
	}
	
}

function go_right(){
	if(((lr['heroposx']+1)>(lr['rx']-h.size)) === false){
				lr['heroposx']+=1;
			}
}

function reset_event(){
	goLeft = goRight = false;
}

function move_hero(e){
	switch(e.keyCode) {
		case 37: //leftarrow
			goLeft = true;
			//go_left();				
			break;
	    case 39: //rightarrow
			goRight=true;
			//go_right();
			break;
		default:
			console.log(e.keyCode);//38 arrowup, 40 arrow down
	}
}

function l_r_hero(e){
	if(goLeft)
		go_left();				
	if(goRight)
		go_right();
}

function start_hero(e){
	switch(e.keyCode) {
		case 83: //s
			clearInterval(cicle);
			setCanvas();				
			break;
		default:
			console.log(e.keyCode);//38 arrowup, 40 arrow down
	}
}

function audio(){
}

function mouse_hero(e){
	if(e.x<(lr['w']/2))
		go_left();
	else
		go_right();
	
}

function splash(){
	lr['w'] = document.documentElement.clientWidth;
	lr['h'] = document.documentElement.clientHeight;
	lr['resolution'] = 48;
	lr['size'] = 0;
	lr['fortune'] = 10;
	lr['time'] = 0;
	lr['textsize']=5;
	lr['index_background'] = 0;
	lr['splashrate'] = 500;
	lr['indexsplash'] = 0;
	lr['splashonscreen'] = ['LOW RES', '', 'PARTY!', '', 'PRESS S', '', 'TO START', '', '' ];
	lr['text_end'] = ['END...', '', 'PRESS S', '', 'TO RESTART', '', '' ];
	grid(lr['resolution']);
	document.getElementById('gameScreen').width = document.documentElement.clientWidth;
	document.getElementById('gameScreen').height = document.documentElement.clientHeight;
	document.addEventListener('keydown', start_hero, false);
	lr['background'] = [['00','00'],['00','11'],['00','22'],['00','33'],['00','44'],['00','55'],['00','66'],['00','77'],['00','88'],['00','99'],['00','AA'],['00','BB'],['00','CC'],['00','DD'],['00','EE'],['00','FF']];
	splashloop();
}

function setCanvas(){
	lr['w'] = document.documentElement.clientWidth;
	lr['h'] = document.documentElement.clientHeight;
	lr['resolution'] = 48;
	lr['framerate'] = 30;
	lr['fallingitem'] = [];
	lr['size'] = 0;
	lr['fortune'] = 10;
	lr['time'] = 0;
	lr['res_sprites'] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	lr['textsize']=5;
	lr['textonscreen']='';
	lr['end'] = false;
	//lr['background'] = [['00','00'],['00','11'],['00','22'],['00','33'],['00','44'],['00','55'],['00','66'],['00','77'],['00','88'],['00','99'],['00','AA'],['00','BB'],['00','CC'],['00','DD'],['00','EE'],['00','FF']];
	lr['index_background'] = 0;
	document.getElementById('gameScreen').width = document.documentElement.clientWidth;
	document.getElementById('gameScreen').height = document.documentElement.clientHeight;
	document.removeEventListener('keydown', start_hero);
	document.addEventListener('keydown', move_hero, false);
	document.addEventListener('keyup', reset_event, false);
	document.addEventListener('mousedown', mouse_hero, false);
	grid(lr['resolution']);
	reset_event();
	audio(); 
	h = new hero();
	h.create();
	
	loop();
	
}

function endloop(){
	var mod = lr['text_end'].length-1;
	lr['indexend']=0;
	cicle = setInterval(function() {
		var textindex = lr['indexend']%mod;
		clear(lr['text_end'][textindex]);
		lr['indexend'] = textindex+1;
		draw();
		console.log('loop');
	}, lr['splashrate']);
}

function splashloop(){
	var mod = lr['splashonscreen'].length-1;
	cicle = setInterval(function() {
		var textindex = lr['indexsplash']%mod;
		clear(lr['splashonscreen'][textindex]);
		lr['indexsplash'] = textindex+1;
		draw();
		console.log('loop');
	}, lr['splashrate']);
}

function loop(){
	cicle = setInterval(function() {
		l_r_hero();
		clear(lr['textonscreen']);
		update();
		h.draw();
		draw();
	}, lr['framerate']);
}

function end(){
	clearInterval(cicle);
	document.removeEventListener('keydown', move_hero);
	document.addEventListener('keydown', start_hero, false);
	var enemy_length = lr['fallingitem'].length?lr['fallingitem'].length:0;
	for(var i = 0;i<enemy_length;i++){
		lr['fallingitem'].splice(i,1);
	}
	clear(lr['textonscreen']);
	endloop();
		
}

function die(id){
	lr['fallingitem'].splice(id,1);		
}

function grow(){
	clearInterval(cicle);
	lr['textonscreen']='GROW!!!';
	var enemy_length = lr['fallingitem'].length?lr['fallingitem'].length:0;
	for(var i = 0;i<enemy_length;i++){
		lr['fallingitem'].splice(i,1);
	}
	clear(lr['textonscreen']);
	draw();
	lr['textonscreen']='';
	setTimeout(loop, 1000);
}

function become_smaller(){
	clearInterval(cicle);
	lr['textonscreen']='SMALL!';
	var enemy_length = lr['fallingitem'].length?lr['fallingitem'].length:0;
	for(var i = 0;i<enemy_length;i++){
		lr['fallingitem'].splice(i,1);
	}
	clear(lr['textonscreen']);
	draw();
	lr['textonscreen']='';
	setTimeout(loop, 1000);
}
