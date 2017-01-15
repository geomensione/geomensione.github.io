"use strict";

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

function jump(){
	if(lr['jump']>0 && lr['descent'] === false){
		lr['heroposy']-=1;
		lr['jump']-=1;
	}else{
		if(lr['descent'] === false){
			lr['descent'] = true;
		}
		IF(lr['jump']<16){
			lr['heroposy']+=1;
			lr['jump']+=1;
		}else{
			lr['descent'] = false;
		}

		
	}
}

function reset_event(){
	goLeft = goRight = false;
}


function l_r_hero(e){
	if(goLeft)
		go_left();				
	if(goRight)
		go_right();
	if(jump)
		jump();
}
