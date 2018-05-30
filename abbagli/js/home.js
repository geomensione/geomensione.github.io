function sectionEvent(e){
	if(e.id.indexOf('home') === -1)
		document.location = e.id+'.html';
}
function sectionEnter(e){
	var color = e.getAttribute('fill');
	e.setAttribute('bkpfill',color);
	e.setAttribute('fill','#ff0000');
	document.getElementsByTagName('text')[0].innerText = e.id;
}
function sectionLeave(e){
	var color = e.getAttribute('bkpfill');
	e.setAttribute('fill',color);
	document.getElementsByTagName('text')[0].innerText = 'Ciao';
}

function loadSvg(str){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var ratio = 41.216/54.886;
			var sezioni = ['home','collane','contatti','bracciali','anelli','mission'];
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
				svg.setAttribute('height', window.innerWidth/ratio);
				container.style.width = window.innerHeight/ratio+'px';
			}
			
			var ellipse_sections = document.getElementsByTagName('ellipse');
			var section_index = 0;
			
			sezioni.forEach((e)=>{
				var el = ellipse_sections.item(section_index);
				el.setAttribute('id',e);
				el.setAttribute('onclick','sectionEvent(this)');
				el.setAttribute('onmouseenter','sectionEnter(this)');
				el.setAttribute('onmouseleave','sectionLeave(this)');
				++section_index;
			});
			
		}
	};
	xhttp.open("GET", "img/"+str, true);
	xhttp.send();
}
