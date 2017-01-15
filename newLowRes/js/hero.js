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


function l_r_hero(e){
	if(goLeft)
		go_left();				
	if(goRight)
		go_right();
}
