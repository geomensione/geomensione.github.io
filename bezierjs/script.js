import * as bezierJs from "./js/bezier.js";
import { getRandomColor } from "./js/color.js"
import * as mybezier from "./mybezier.js"

const { Bezier } = bezierJs;


var canvas = document.createElement("canvas");
document.body.append(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ce = new mybezier.CodeExample(canvas);

var draw = function () {
	this.drawCurves(); //curve non crea una cubic bezier con 4 punti di controllo, ma una curva che passa nei 4 punti dati
	this.setColor("red");
	this.drawbbox();
	this.drawOutline();
	//this.drawStartAndEnd();
  this.drawSkeleton();

};
ce.draw = draw.bind(ce);

mybezier.handleInteraction(ce.getCanvas()).onupdate = (evt) => {
	ce.reset();
	ce.draw(evt);
};

document.addEventListener("keydown", function (evt) {
	let aggiornare = false;
	if (evt.defaultPrevented) {
		return; // Should do nothing if the default action has been cancelled
	}

	var handled = false;
	if (evt.key !== undefined) {
		let scaleFirst = false;
		let scene = [];

		switch(evt.key){
			case '-':
			  curves.forEach((e)=>{
			    if(!scaleFirst){
					if(e.showBBoxMin){
						if((e.outlinemin-1)>0) e.outlinemin--
						scaleFirst = true;
						aggiornare = true;
					}
					if(e.showBBoxMax){
						if((e.outlinemax-1)>0) e.outlinemax--
						scaleFirst = true;
						aggiornare = true;
					}	  
				  }
			  })
			  break;
			case '+':
				
			  curves.forEach((e)=>{
				  if(!scaleFirst){
					if(e.showBBoxMin){
						e.outlinemin++
						scaleFirst = true;
						aggiornare = true;
					}
					if(e.showBBoxMax){
						e.outlinemax++
						scaleFirst = true;
						aggiornare = true;
					}	  
				  }
			    
			  })
			  break;
			case 'c':
			  let c = getRandomColor();
			  addBezier(canvas,102, 33, 16, 99, 101, 129, 132, 173,c);
			  break;
			case 's':
				scene = [];
			        curves.forEach((e)=>{
					let curveString = {};
					curveString.points = [];
					e.points.forEach((p)=>{
						curveString.points.push([p.x,p.y])
					})
					curveString.showbbx = e.showbbx;
					curveString.mouse = e.mouse;
					curveString.outlinemin = e.outlinemin;
					curveString.outlinemax = e.outlinemax;
					curveString.color = e.color;
					scene.push(curveString);
				})
				localStorage['F2D'] = JSON.stringify(scene)
			  break;
			case 'l':
				scene = JSON.parse(localStorage['F2D']);
				curves.length = 0;
			        
					let pts = e.points;
					curves.push(new Bezier(pts[0][0],pts[0][1],pts[1][0],pts[1][1],pts[2][0],pts[2][1],pts[3][0],pts[3][1]));
					curves[curves.length-1].showbbx = e.showbbx;
					curves[curves.length-1].mouse = e.mouse;
					curves[curves.length-1].outlinemin = e.outlinemin;
					curves[curves.length-1].outlinemax = e.outlinemax;
					curves[curves.length-1].color = e.color;	
				
				aggiornare = true;
			  break;
			case 'i':
				//https://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl
				var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");


				window.location.href=image; 
			  break;
			case 'r':
				
				let numberOfCurves = 50;
				curves.length = 0;
			        for(let i = 0;i<numberOfCurves;i++){
					let pts = [];
					pts.push([getRandomX(),getRandomY()])
					pts.push([getRandomX(),getRandomY()])
					pts.push([getRandomX(),getRandomY()])
					pts.push([getRandomX(),getRandomY()])
					curves.push(new Bezier(pts[0][0],pts[0][1],pts[1][0],pts[1][1],pts[2][0],pts[2][1],pts[3][0],pts[3][1]));
					curves[curves.length-1].showbbx = false;
					curves[curves.length-1].mouse = false;
					curves[curves.length-1].outlinemin = getRandomThick();
					curves[curves.length-1].outlinemax = getRandomThick();
					curves[curves.length-1].color = getRandomColor();	
				}
				
				var draw = function () {
					//this.drawCurves(); //curve non crea una cubic bezier con 4 punti di controllo, ma una curva che passa nei 4 punti dati
					//this.setColor("red");

					this.drawStartAndEnd();
					//this.drawbbox();
					this.drawOutline();
					//this.drawFrame(5)
					//this.drawFrame(15)
					//this.drawFrame(30)
				  //this.drawSkeleton();

				};
				ce.draw = draw.bind(ce);
				
				aggiornare = true;
			  break;
			case 't':
				curves.length = 0;
				var draw = function () {
					this.drawCurves(); //curve non crea una cubic bezier con 4 punti di controllo, ma una curva che passa nei 4 punti dati
					this.setColor("red");
					this.drawbbox();
					this.drawOutline();
					//this.drawStartAndEnd();
				  this.drawSkeleton();

				};
				ce.draw = draw.bind(ce);
				aggiornare = true;
				break;

		}
	}

	if (handled) {
		// Suppress "double action" if event handled
		evt.preventDefault();
	}
	if(aggiornare){
		ce.reset();
		ce.draw();
	}

});

function getRandomX(){
  let width = window.innerWidth;
  return Math.round(Math.random() * width) + 1;
}

function getRandomY(){
  let height = window.innerHeight;
  return Math.round(Math.random() * height) + 1;
}

export function getRandomThick(){
	let thick = [1,5,10,20,50,100];
  let thickLength = thick.length;
  let randomIndex = Math.round(Math.random() * thickLength) + 1;
  return thick[randomIndex];
}

function addBezier(canvas,x1,y1,x2,y2,x3,y3,x4,y4,color){
  
  curves.push(new Bezier(x1,y1,x2,y2,x3,y3,x4,y4));
  curves[curves.length-1].showbbx = false;
  curves[curves.length-1].mouse = false;
  curves[curves.length-1].outlinemin = 1;
  curves[curves.length-1].outlinemax = 25;
  curves[curves.length-1].color = color;
  
  ce.draw();

}

addBezier(canvas,102, 33, 16, 99, 101, 129, 132, 173,'blue');
addBezier(canvas,152, 83, 66, 149, 151, 179, 182, 223,'lightblue');
