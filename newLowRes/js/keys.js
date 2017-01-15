"use strict";

function move_hero(e){
	switch(e.keyCode) {
		case 37: //leftarrow
			goLeft = true;
			//go_left();				
			break;
		case 38:
			jump = true;
			break;
	    case 39: //rightarrow
			goRight=true;
			//go_right();
			break;
		default:
			console.log(e.keyCode);//38 arrowup, 40 arrow down
	}
}

function key_up(e){
	switch(e.keyCode) {
		case 37: //leftarrow
			goLeft = false;
			//go_left();				
			break;
			/*
		case 38:
			jump = false;
			break;
			*/
	    case 39: //rightarrow
			goRight=false;
			//go_right();
			break;
		default:
			console.log(e.keyCode);//38 arrowup, 40 arrow down
	}
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
