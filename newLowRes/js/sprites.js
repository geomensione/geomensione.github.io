"use strict";

var sprites = {
'hero':[
 '0011111111111100',
 '0111000110001110',
 '1111101111011111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111011111111111',
 '1111100000011111',
 '1011111111111101',
 '1001111111111001',
 '1000111111110001',
 '0000111111110000',
 '0000111111110000',
 '0000111111110000',
 '0000100000010000',
 '0000100000010000'
 ],
 'hero1':[
 '1'
 ],
 'hero2':[
 '1X',
 'X1'
 ],
 'hero3':[
 '1XX',
 'X1X',
 '1X1'
 ],
 'hero4':[
 'X11X',
 '1XX1',
 '1111',
 '1111'
 ],
 'hero5':[
 '11111',
 '1X1X1',
 '11111',
 'X111X',
 '11X11'
 ],
 'hero6':[
 '111111',
 '1X11X1',
 '111111',
 '111111',
 '1XXXX1',
 '111111'
 ],
 'hero7':[
 '1111111',
 '1XX1XX1',
 '1111111',
 '1111111',
 '1XX1XX1',
 '1XXXXX1',
 '1111111'
 ],
 'hero8':[
 '00111100',
 '01011010',
 '11100111',
 '11111111',
 '01100110',
 '00111100',
 '11100111',
 '10000001'
 ],
 'hero9':[
 '111111111',
 '100111001',
 '110111011',
 '111111111',
 '000111000',
 '111111111',
 '100111001',
 '000111000',
 '111101111'
 ],
 'hero10':[
 '1000000001',
 '1111111111',
 '1000110001',
 '1111111111',
 '1001111001',
 '0001111000',
 '1111001111',
 '0001111000',
 '1111111111',
 '1010000101'
 ],
 'hero11':[
 '11111011111',
 '10101010101',
 '11111011111',
 '10001010001',
 '11111011111',
 '01110001110',
 '11111111111',
 '10100000101',
 '10100000101',
 '00100000100',
 '11111011111'
 ],
 'hero12':[
 '000001100000',
 '100011110001',
 '110111111011',
 '111111111111',
 '100011110001',
 '111110011111',
 '001100001100',
 '001101101100',
 '111111111111',
 '111111111111',
 '101011110101',
 '000010010000'
 ],
 'hero13':[
 '1111100011111',
 '1000100010001',
 '1010110110101',
 '1000111110001',
 '1111111111111',
 '1011111111101',
 '1000000000001',
 '1111111111111',
 '0111111111110',
 '0011111111100',
 '0010111110100',
 '0010110110100',
 '0000100010000'
 ],
 'hero14':[
 '11101111110111',
 '10110111101101',
 '10011011011001',
 '10001100110001',
 '11111111111111',
 '10111011011101',
 '10010011001001',
 '10000000000001',
 '11111111111111',
 '11111111111111',
 '11101011010111',
 '10101100110101',
 '10101111110101',
 '10101011010101'
 ],
 'hero15':[
 '101010101010101',
 '111111111111111',
 '100000000000001',
 '100111111111001',
 '100100111001001',
 '111111111111111',
 '000111111111000',
 '000001111100000',
 '111111111111111',
 '111001111100111',
 '111001111100111',
 '111001111100111',
 '111101111101111',
 '111101111101111',
 '111001000100111'
 ],
 'hero16':[
 '0000111111110000',
 '0011111111111100',
 '0111011111101110',
 '0111101111011110',
 '1111110110111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111000000001111',
 '1111011111101111',
 '1111111111111111',
 '1110111111110111',
 '1010111111110101',
 '0000111001110000',
 '0011111001111100',
 '1111110000111111'
 ],
 'white':[
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111',
 '1111111111111111'
 ],
 'black':[
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000',
 '0000000000000000'
 ]
};

var chars = {
	'A': [
		'00100',
		'01010',
		'10001',
		'11111',
		'10001'
	],
	'B': [
		'11110',
		'10001',
		'11110',
		'10001',
		'11111'
	],
	'C': [
		'01111',
		'10000',
		'10000',
		'10000',
		'01111'
	],
	'D': [
		'11110',
		'10001',
		'10001',
		'10001',
		'11111'
	],
	'E': [
		'11111',
		'10000',
		'11100',
		'10000',
		'11111'
	],
	'F': [
		'11111',
		'10000',
		'11100',
		'10000',
		'10000'
	],
	'G': [
		'01111',
		'10000',
		'10011',
		'10001',
		'01110'
	],
	'H': [
		'10001',
		'10000',
		'11111',
		'10001',
		'10001'
	],
	'I': [
		'00100',
		'00100',
		'00100',
		'00100',
		'00100'		
	],
	'J': [
		'00001',
		'00001',
		'00001',
		'10001',
		'01110'		
	],
	'K': [
		'10001',
		'10010',
		'11100',
		'10010',
		'10001'		
	],
	'L': [
		'10000',
		'10000',
		'10000',
		'10000',
		'11111'		
	],
	'M': [
		'10001',
		'11011',
		'10101',
		'10001',
		'10001'		
	],
	'N': [
		'10001',
		'11001',
		'10101',
		'10011',
		'10001'
	],
	'O': [
		'01110',
		'10001',
		'10001',
		'10001',
		'01110'		
	],
	'P': [
		'11110',
		'10001',
		'11110',
		'10000',
		'10000'		
	],
	'Q': [
		'01110',
		'10001',
		'10101',
		'10011',
		'01110'		
	],
	'R': [
		'11110',
		'10001',
		'11110',
		'10001',
		'10001'		
	],
	'S': [
		'01111',
		'10000',
		'01110',
		'00001',
		'11110'		
	],
	'T': [
		'11111',
		'00100',
		'00100',
		'00100',
		'00100'		
	],
	'U': [
		'10001',
		'10001',
		'10001',
		'10001',
		'01110'		
	],
	'V': [
		'10001',
		'10001',
		'10001',
		'01010',
		'00100'		
	],
	'W': [
		'10001',
		'10101',
		'10101',
		'10101',
		'01010'		
	],
	'X': [
		'10001',
		'01010',
		'00100',
		'01010',
		'10001'		
	],
	'Y': [
		'10001',
		'01010',
		'00100',
		'00100',
		'00100'		
	],
	'Z': [
		'11111',
		'00010',
		'00100',
		'01000',
		'11111'		
	],
	'!': [
		'00100',
		'00100',
		'00100',
		'00000',
		'00100'		
	],
	'.': [
		'00000',
		'00000',
		'00000',
		'00000',
		'00100'		
	],
	' ': [
		'00000',
		'00000',
		'00000',
		'00000',
		'00000'		
	],
	'1': [
		'00010',
		'00110',
		'01010',
		'00010',
		'00010'		
	],
	'2': [
		'01110',
		'10001',
		'00010',
		'01100',
		'11111'		
	],
	'3': [
		'11110',
		'00001',
		'00110',
		'00001',
		'11110'		
	],
	'4': [
		'00010',
		'00110',
		'01010',
		'11111',
		'00010'		
	],
	'5': [
		'11111',
		'10000',
		'11110',
		'10001',
		'11110'		
	],
	'6': [
		'01111',
		'10001',
		'11110',
		'10001',
		'01110'		
	],
	'7': [
		'11111',
		'00001',
		'00010',
		'00100',
		'01000'		
	],
	'8': [
		'01110',
		'10001',
		'01110',
		'10001',
		'01110'		
	],
	'9': [
		'01110',
		'10001',
		'01111',
		'00001',
		'01110'		
	],
	'0': [
		'01110',
		'11001',
		'10100',
		'10011',
		'01110'		
	],
}

var rgb = {
	'blue':['00','00','FF']
}
function hero(){
	this.frame=1;
	this.velocity= 5;
	this.drawSprite = function(name,x,y){
		this.size = lr['res_sprites'][lr['size']];
		for(var i = x,xoffset = x+lr['res_sprites'][lr['size']],i_s = 0;i<xoffset;i++,i_s++){
			for(var ii = y,yoffset = y+lr['res_sprites'][lr['size']],ii_s = 0;ii<yoffset;ii++,ii_s++){
				colorPixel(ii,i,newSprites[name][i_s].charAt(ii_s));
			}
		}
	};
	this.draw = function(){
		//this.drawSprite('doc_boy', lr['ry']-lr['res_sprites'][lr['size']], lr['heroposx']);
		this.drawSprite('shark_hunter_'+lr['direction']+'_'+(this.frame%2), lr['heroposy'], lr['heroposx']);
		this.frame+=1;
	};
	this.create = function(){
		lr['main_sprite'] = 'doc_boy';
		lr['heroposx']=0;
		lr['heroposy']=lr['ry']-lr['res_sprites'][lr['size']];
	}

};

function armature(x) {
	this.velocity = 5;
	this.posx = x;
	this.posy = 0;
	this.numberOfFlicker = 30;
	
	this.drawSprite = function(index) {
		this.size = lr['res_sprites'][lr['size']+1];
		if(this.posy+this.size <= lr['ry']){
			var abortloop = false;
			for(var i = this.posx,xoffset = this.posx+this.size,i_s = 0;i<xoffset && !abortloop;i++,i_s++){
				for(var ii = this.posy,yoffset = this.posy+this.size,ii_s = 0;ii<yoffset && !abortloop;ii++,ii_s++){
					if(lr['fb'][i] && lr['fb'][i][ii]){
						if(sprites['hero'+this.size][ii_s].charAt(i_s) === '1'){
							lr['fb'][i][ii] = ['FF', '00', '00'];
						}
					}
					if(((this.posx <= lr['heroposx'] && lr['heroposx'] <= this.posx+this.size) || (this.posx <= lr['heroposx']+this.size && lr['heroposx']+this.size <= this.posx+this.size)) && this.posy+this.size >= lr['heroposy']){
						armature_sound.play();
						hit('a');
						abortloop=true;
					}else{
						if((this.posy+this.size) >= lr['ry']){
							lr['fallingitem'].splice(index,1);
							abortloop=true;
						}
						
					}
				}
			}
			this.posy += 1;	
		}else{
			die(index);
		}
			
	}
}

function glitch(x) {
	this.velocity = 5;
	this.posx = x;
	this.posy = 0;
	this.numberOfFlicker = 30;
	this.flick = 0;
	this.white = false;	
	
	this.drawSprite = function(index) {
		this.size = lr['res_sprites'][lr['size']];
		if(this.posy+this.size <= lr['ry']){
		    var abortloop = false;
			for(var i = this.posx,xoffset = this.posx+this.size,i_s = 0;i<xoffset && !abortloop;i++,i_s++){
				for(var ii = this.posy,yoffset = this.posy+this.size,ii_s = 0;ii<yoffset && !abortloop;ii++,ii_s++){
					if(lr['fb'][i] && lr['fb'][i][ii]){
						if(rand(2)%2 === 0){
							lr['fb'][i][ii] = ['FF', 'FF', 'FF'];
						}else{
							lr['fb'][i][ii] = ['00', '00', '00'];
						}
					}
					if(((this.posx <= lr['heroposx'] && lr['heroposx'] <= this.posx+this.size) || (this.posx <= lr['heroposx']+this.size && lr['heroposx']+this.size <= this.posx+this.size)) && this.posy+this.size >= lr['heroposy']){
						glitch_sound.play();
						hit('g');
						die(index);
						abortloop=true;
					}else{
						if((this.posy+this.size) >= lr['ry']){
							lr['fallingitem'].splice(index,1);
							abortloop=true;
						}else{
							this.flick += 1;
						}
						
					}
							
				}
			}
			
			this.posy += 1;
		}else{
			die(index);
		}	
	}
}

function hit(type){
	switch(type){
		case 'g':
			lr['size']--;
			if(lr['size']<0){
				lr['size']=0;
				end();	
				break;
			}
			become_smaller();
			break;
		case 'a':
			lr['size']++;
			if(lr['size']>=lr['res_sprites'].length-1){
				end();
				break;
			}
			grow();
			break;
	}	
} 
