function loadSvg(str){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   var ratio = 41.216/54.886;
		   document.body.innerHTML = xhttp.responseText;
			var svg = document.getElementsByTagName('svg')[0];
			if(window.innerWidth>window.innerHeight){
				svg.setAttribute('height', window.innerHeight);
				svg.setAttribute('width', window.innerHeight*ratio);
			}else{
				svg.width = window.innerWidth;
				sv);g.height = window.innerWidth/ratio;
			}
		}
	};
	xhttp.open("GET", "img/"+str, true);
	xhttp.send();
}
