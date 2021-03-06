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
 'shark_hunter_R_0':[
  '0000RRRR000000G0',
  '000RRRRRR00000G0',
  '00RRRRRRRR0000G0',
  '0RRRRRRRRRR000G0',
  '0RRRRWRRWRR00G00',
  '0RRRRRRRRRR00G00',
  '0RRRRRRRRRR00G00',
  '00RRRWWRRR000G00',
  '000RRRRRR0000G00',
  '0WWWWWWWWWWRR000',
  '0R000WWWW0000000',
  '0R000WWWWW000000',
  '00000WWWWW000000',
  '00W00RRRRRWW0000',
  '0WWWWW00000W0W00',
  '0W0000000000WW00'
 ],
  'shark_hunter_R_1':[
  '0000RRRR000000G0',
  '000RRRRRR00000G0',
  '00RRRRRRRR0000G0',
  '0RRRRRRRRRR000G0',
  '0RRRRWRRWRR00G00',
  '0RRRRRRRRRR00G00',
  '0RRRRRRRRRR00G00',
  '00RRRWWRRR000G00',
  '000RRRRRR0000G00',
  '0WWWWWWWWWWRR000',
  '0R000WWWW0000000',
  '0R000WWWWW000000',
  '00000WWWWW000000',
  '00000RRRRRW0000',
  '0000WW0000W00000',
  '0000W00000WW0000'
 ],
 'shark_hunter_L_0':[
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
'shark_hunter_L_1':[
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
'00000W0000WW0000',
'0000WW00000W0000'
],
'shark_R':[
 '0000000000000000',
'00000000W0000000',
'W0000000WW000000',
'WW000000WW000000',
'0WW0000WWWW00000',
'0WWWWWWWWWWWWWWW',
'00WWWWWWWWWWWWWW',
'0WW0WWWWKWWWWWP0',
'0WW00GWWWWWWW0P0',
'WW00GGWWWWW0P000',
'000GGGGWWW000000',
'00GGG00WWWP00000',
'0000000WWW000000',
'00000000WWP00000',
'000000000P000000',
'0000000000000000'
 ],
 'shark_L':[
 '0000000000000000',
  '0000000W00000000',
  '000000WW0000000W',
  '000000WW000000WW',
  '00000WWWW0000WW0',
  'WWWWWWWWWWWWWWW0',
  'WWWWWWWWWWWWWW00',
  '0RWWWWWKWWWW0WW0',
  '0R0WWWWWWWY00WW0',
  '000R0WWWWWYY00WW',
  '000000WWWYYYY000',
  '00000RWWW00YYY00',
  '000000WWW0000000',
  '00000RWW00000000',
  '000000R000000000',
  '0000000000000000'
 ],
'blood_L':[
  '0000000000000000',
  '00R0000R0000R000',
  '000R00RR0000R00R',
  '000000R0R000R000',
  'R00R00RR00000R00',
  '0R00RRRR00000R0R',
  '00RR0RRR0RR0RRR0',
  'R0R0R0RRR0R0R0RR',
  'RR0R0R0RRRR0R0R0',
  '0RRR0RR0RRR0RR00',
  'R0R00000RRRR00R0',
  '00R00000RR0000RR',
  '000R00000R000R00',
  '00R00000000R0000',
  '0000R0000000000R',
  '0000000R00000000'
 ]

}

function colorPixel(i,ii,c){
  switch(c){
    case 'G':
      lr['fb'][i][ii] = ['00','FF','00'];
      break;
    case 'R':
      lr['fb'][i][ii] = ['FF','00','00'];
      break;
    case 'B':
      lr['fb'][i][ii] = ['00','00','FF'];
      break;
    case 'W':
      lr['fb'][i][ii] = ['FF','FF','FF'];
      break;
    case 'K':
      lr['fb'][i][ii] = ['00','00','00'];
      break;
    case 'Y':
      lr['fb'][i][ii] = ['FF','FF','00'];
      break;
    case 'V':
      lr['fb'][i][ii] = ['FF','00','FF'];
      break;
    case 'C':
      lr['fb'][i][ii] = ['00','FF','FF'];
      break;
      
    
  }
  
}

function shark(start_pos_y){
	this.posx = lr['rx']-lr['res_sprites'][lr['size']-1];
	this.posy = start_pos_y;
	this.velocity= 5;
	this.name = 'shark_L';
	this.dir = 'L';
	this.blood = true;
	this.hit = false;
	this.drawSprite = function(index){
		this.size = lr['res_sprites'][lr['size']-1];
		if(this.posx >= 0){
			var abortloop = false;
			if(this.blood)
			{
				for(var i = this.posx,xoffset = this.posx+this.size,i_s = 0;i<xoffset && !abortloop;i++,i_s++){
					for(var ii = this.posy,yoffset = this.posy+this.size,ii_s = 0;ii<yoffset && !abortloop;ii++,ii_s++){
						colorPixel(i,ii,newSprites[this.name][ii_s].charAt(i_s));
						
						if(this.posx <= lr['heroposx']+lr['size'])
						{
							   if((this.posy+4)<=lr['heroposy']+(lr['size']/2) 
							   	&& (this.posy+4)>= lr['heroposy']){
								console.log('colpito!');
								if(!this.hit)
								{
									localStorage.score++;
									this.hit=true;
								}
								this.name = 'blood_L';
								this.blood=false;
							   }
							   else if((this.posy+4)>=lr['heroposy']+(lr['size']/2) 
							   	&& (this.posy+4)<= lr['heroposy']+lr.size)
							   {
							   	lr.end = true;
							   }
						}else{
							if((this.posy+this.size) >= lr['ry']){
								lr['fallingitem'].splice(index,1);
								abortloop=true;
							}

						}

						
						
					}
				}
			}
			else
			{
				abortloop=true;
				die(index);
			}
			
			if(this.dir === 'L' && (this.posx-1)>=0){
			   	this.posx -= 1;
			}else{
				if(this.posx-1<0){
				this.dir = 'R';
				}else{
					if((this.posx+1)>lr['rx']){
						this.dir = 'L';
					}else{
						this.posx+=1;
					}
				} 
			}
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

