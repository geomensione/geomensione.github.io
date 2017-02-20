"use strict";

var lr = {};
var cicle = {};
var h = {};
var armature_sound = new Audio("sounds/hit_armature.mp3");
var glitch_sound = new Audio("sounds/hit_glitch.mp3");
var spawn_sound = new Audio("sounds/spawn.mp3");
var goLeft = false
    , goRight = false;

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
			//Disegna lo sprite opaco
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

function drawScore() {
	var score = localStorage.score.toString();
	var score_length = score.length;
	//devo tener conto dei numeri e degli spazi
	var x = lr['rx']-(5*score_length+(score_length-1));
	var y = 0;
	for(var i=0; i < score_length; i++) {
        	x += drawLetter(x, y, score.charAt(i), rgb['blue']) + 1;
    	}
}

function clear(text){
	var rx = lr['rx'];
	var ry = lr['ry'];
	switch(text){
		case '':
			var back_color = lr['index_background']%2;
			for(var i = 0;i<rx;i++){
				for(var d = 0;d<ry;d++){
					//prendo il colore nero per il background
					var color = lr['background'][15][back_color%2];
					lr['fb'][i][d] = [color, color, color];
				}
			}
			//lr['index_background'] = back_color+1;
			break;
		case 'test':   
			
			for(var i = 0;i<rx;i++){
				var back_color = i%2;
				for(var d = 0;d<ry;d++){
					var color = lr['background'][15][back_color%2];// B/N
					back_color+=1;
					lr['fb'][i][d] = [color, color, color];
				}
			}
			break;
		default:
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
			var g = new shark(rand(lr['ry']-lr['res_sprites'][lr['size']-1]));
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





function audio(){
}

function mouse_hero(e){
	lr['jump']=true;
	lr['fall']=false;
	
}

function mouse_up_hero(e){
	lr['jump']=false;
	lr['fall']=true;
	
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
	lr['splashonscreen'] = ['NEW', '', 'LOW RES', '', 'PARTY!', '', 'PRESS S', '', 'TO START', '', '' ];
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
	lr['framerate'] = 50;
	lr['fallingitem'] = [];
	lr['size'] = 16;
	lr['fortune'] = 10;
	lr['time'] = 0;
	lr['res_sprites'] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	lr['textsize']=5;
	lr['textonscreen']='';
	lr['end'] = false;
	lr['jump'] = false;
	lr['salita'] = false;
	lr['_jump'] = lr['size'];
	lr['fall'] = false;
	lr['descent'] = false;
	lr['direction'] = 'R';
	localStorage['score'] = 0;
	//lr['background'] = [['00','00'],['00','11'],['00','22'],['00','33'],['00','44'],['00','55'],['00','66'],['00','77'],['00','88'],['00','99'],['00','AA'],['00','BB'],['00','CC'],['00','DD'],['00','EE'],['00','FF']];
	lr['index_background'] = 0;
	document.getElementById('gameScreen').width = document.documentElement.clientWidth;
	document.getElementById('gameScreen').height = document.documentElement.clientHeight;
	/*
	document.removeEventListener('keydown', start_hero);
	document.addEventListener('keydown', move_hero, false);
	document.addEventListener('keyup', key_up, false);
	*/
	document.addEventListener('mousedown', mouse_hero, false);
	document.addEventListener('mouseup', mouse_up_hero, false);
	grid(lr['resolution']);
	//reset_event();
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
		//clear(lr['text_end'][textindex]);
		clear('test');
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
		//clear('test');
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
		drawScore();
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
