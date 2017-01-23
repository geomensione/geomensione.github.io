"use strict";

var newSprites = {
'doc_boy':[
 '00000GGGGGG00000',
 '0000GPPPPPPG0000',
 '000GPPPPPPPPG000',
 '00PPPPPPPPPPPP00',
 '0pPPPPAPPAPPPPp0',
 '0pPPPPPPPPPPPPp0',
 '00pPPPPPPPPPPp00',
 '000GPPPppPPPG000',
 '000GGPPPPPPGG000',
 '0000000PP0000000',
 '000PAAAAAAAAP000',
 '00000AAAAAA00000',
 '00000AAAAAA00000',
 '00PP0AAAAAA0PP00',
 '00PPAAAAAAAAPP00',
 '00PPAAAAAAAAPP00',
 '00PPAAAAAAAAPP00',
 '00PPAAAAAAAAPP00'
],
 'shark_hunter_R':[
  '0000WWWW000000V0',
  '000WWWWWW00000V0',
  '00WWWWWWWW0000V0',
  '0WWWWWWWWWW000V0',
  '0WWWWBWWBWW00V00',
  '0WWWWWWWWWW00V00',
  '0WWWWWWWWWW00V00',
  '00WWWBBWWW000V00',
  '000WWWWWW0000V00',
  '0WWWWWWWWWWWW000',
  '0W000WWWW0000000',
  '0W000WWWWW000000',
  '00000WWWWW000000',
  '00W00WWWWWWW0000',
  '0WWWWW00000W0W00',
  '0W0000000000WW00'
 ],
 'shark_hunter_L':[
 '0V000000WWWW0000',
'0V00000WWWWWW000',
'0V0000WWWWWWWW00',
'0V000WWWWWWWWWW0',
'00V00WWBWWBWWWW0',
'00V00WWWWWWWWWW0',
'00V00WWWWWWWWWW0',
'00V000WWWBBWWW00',
'00V0000WWWWWW000',
'000WWWWWWWWWWWW0',
'0000000WWWW000W0',
'000000WWWWW000W0',
'000000WWWWW00000',
'0000WWWWWWW00W00',
'00W0W00000WWWWW0',
'00WW0000000000W0'
],
 'shark_R':[
 '0000000000000000',
  '0000000W00000000',
  '000000WW0000000W',
  '000000WW000000WW',
  '00000WWWW0000WW0',
  'WWWWWWWWWWWWWWW0',
  'WWWWWWWWWWWWWW00',
  '0PWWWWWBWWWW0WW0',
  '0P0WWWWWWWG00WW0',
  '000P0WWWWWGG00WW',
  '000000WWWGGGG000',
  '00000PWWW00GGG00',
  '000000WWW0000000',
  '00000PWW00000000',
  '000000P000000000',
  '0000000000000000'
 ]
}

function colorPixel(i,ii,c){
  switch(c){
    case 'G':
      lr['fb'][i][ii] = ['FF','FF','00'];
      break;
    case 'A':
      lr['fb'][i][ii] = ['AA','AA','FF'];
      break;
    case 'P':
      lr['fb'][i][ii] = ['FF','AA','AA'];
      break;
    case 'p':
      lr['fb'][i][ii] = ['FF','77','77'];
      break;
    case 'B':
      lr['fb'][i][ii] = ['00','00','00'];
      break;
    case 'W':
      lr['fb'][i][ii] = ['FF','FF','FF'];
      break;
    case 'V':
      lr['fb'][i][ii] = ['00','FF','00'];
      break;
      
    
  }
  
}

function shark(start_pos_y){
	this.posx = lr['rx']-lr['res_sprites'][lr['size']];
	this.posy = start_pos_y;
	this.velocity= 5;
	this.drawSprite = function(index){
		this.size = lr['res_sprites'][lr['size']];
		if(this.posx >= 0){
			var abortloop = false;
			for(var i = this.posx,xoffset = this.posx+this.size,i_s = 0;i<xoffset && !abortloop;i++,i_s++){
				for(var ii = this.posy,yoffset = this.posy+this.size,ii_s = 0;ii<yoffset && !abortloop;ii++,ii_s++){
					colorPixel(i,ii,newSprites['shark_L'][ii_s].charAt(i_s));
					/*
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
					*/
				}
			}
			this.posx -= 1;	
		}else{
			die(index);
		}
		/*
		this.size = lr['res_sprites'][lr['size']];
		for(var i = this.posx-lr['res_sprites'][lr['size']],i_s = 0;i_s<16;i_s++){
			for(var ii = this.posy,ii_s = 0;ii<16;ii++,ii_s++){
				colorPixel(i,ii,newSprites['shark_R'][ii_s].charAt(i_s));
			}
		}
		*/
		this.posx -= 1;
	};
	

};

