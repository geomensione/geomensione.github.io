//taken from https://css-tricks.com/snippets/javascript/lighten-darken-color/
function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

function sectionEvent(e){
	var str_page = (typeof e === 'string')? e ! e.id;
	if(str_page.indexOf('home') === -1){
		localStorage.page = str_page;
		document.location = 'page.html';
	}
	
}
function sectionEnter(e){
	var color = e.getAttribute('fill');
	e.setAttribute('bkpfill',color);
	var NewColor = LightenDarkenColor(color, -20);
	e.setAttribute('fill',NewColor);
	var textEl = document.getElementsByTagName('text')[0];
	textEl.innerHTML = e.id;
}
function sectionLeave(e){
	var color = e.getAttribute('bkpfill');
	e.setAttribute('fill',color);
	var textEl = document.getElementsByTagName('text')[0];
	textEl.innerHTML = 'Abbagli';
}

var sezioni = ['home','collane','contatti','bracciali','anelli','mission'];

function loadSvg(str){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var ratio = 41.216/54.886;
			
			var container = document.getElementById('container')
			container.innerHTML = xhttp.responseText;
			container.style.margin = '0 auto';
			container.style.padding = 0;
			var svg = document.getElementsByTagName('svg')[0];
			if(window.innerWidth>window.innerHeight){
				svg.setAttribute('height', window.innerHeight);
				svg.setAttribute('width', window.innerHeight*ratio);
				container.style.width = window.innerHeight*ratio+'px';
			}else{
				svg.setAttribute('width', window.innerWidth);
				svg.setAttribute('height', window.innerHeight);
				container.style.width = window.innerWidth+'px';
			}
			
			var ellipse_sections = document.getElementsByTagName('ellipse');
			var section_index = 0;
			
			sezioni.forEach((e)=>{
				var el = ellipse_sections.item(section_index);
				el.setAttribute('id',e);
				el.setAttribute('onclick','sectionEvent(this)');
				el.setAttribute('ontouchstart','sectionEvent(this)');
				el.setAttribute('onmouseenter','sectionEnter(this)');
				el.setAttribute('onmouseleave','sectionLeave(this)');
				++section_index;
			});
			
		}
	};
	xhttp.open("GET", "img/"+str, true);
	xhttp.send();
}

function loadPage(){
	document.getElementsByTagName('title')[0].text = localStorage.page;
	document.getElementsByClassName('font_size_2em')[0].innerText = localStorage.page;
	var links = document.getElementsByClassName('link');
	for(let s = 0,l = 0, sezioni_length = sezioni.length;s<sezioni_length;s++){
		if(sezioni[s] === localStorage.page)
			s += 1;
		if(l<links.length){
			links[l].children[0].innerText = sezioni[s];
			links[l].onclick = sectionEvent(sezioni[s]);
		}
		l += 1;
		
	}
	
}
