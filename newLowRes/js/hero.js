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

function fly()
{
	if(lr['heroposy']-1>0)
		lr['jump']-=1;
	else
		jump = false;
}

function fallfn()
{
	if(lr['heroposy']+lr['size']<lr['ry'])
		lr['jump']+=1;
	else
		fall=false;
}

function go_jump(){
	if(lr['jump']>0 && lr['descent'] === false){
		lr['heroposy']-=1;
		lr['jump']-=1;
	}else{
		if(lr['descent'] === false){
			lr['descent'] = true;
		}
		if(lr['jump']<16){
			lr['heroposy']+=1;
			lr['jump']+=1;
		}else{
			lr['descent'] = false;
			jump = false;
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
		fly();//go_jump();
	if(fall)
		fallfn();
}
