function sectionEvent(e){
	document.location = 'pagine/'+e.id+'.html';
}

function loadSvg(str){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var ratio = 41.216/54.886;
			var sezioni = ['home','collane','contatti','bracciali','anelli'];
			document.body.innerHTML = xhttp.responseText;
			var svg = document.getElementsByTagName('svg')[0];
			if(window.innerWidth>window.innerHeight){
				svg.setAttribute('height', window.innerHeight);
				svg.setAttribute('width', window.innerHeight*ratio);
			}else{
				svg.setAttribute('width', window.innerWidth);
				svg.setAttribute('height', window.innerWidth/ratio);
			}
			
			var ellipse_sections = document.getElementsByTagName('ellipse');
			var section_index = 0;
			
			sezioni.forEach((e)=>{
				var el = ellipse_sections.item(section_index);
				el.setAttribute('id',e);
				el.setAttribute('onclick','sectionEvent(this)');
				++section_index;
			});
			
		}
	};
	xhttp.open("GET", "img/"+str, true);
	xhttp.send();
}
