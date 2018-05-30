function sectionEvent(e){
	if(e.id.indexOf('home') === -1)
		document.location = e.id+'.html';
}
function sectionEnter(e){
	e.fill="#ff0000"
}
function sectionLeave(e){
	e.fill="#4ab6cf";
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
				el.setAttribute('mouseenter','sectionEnter(this)');
				el.setAttribute('mouseleave','sectionLeave(this)');
				++section_index;
			});
			
		}
	};
	xhttp.open("GET", "img/"+str, true);
	xhttp.send();
}
