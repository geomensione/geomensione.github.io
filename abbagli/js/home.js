function loadSvg(str){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   var ratio = 41.216/54.886;
		   document.body.innerHTML = xhttp.responseText;
			if(window.innerWidth>window.innerHeight){
				document.svg.height = window.innerHeight;
				document.svg.width = window.innerHeight/ratio
			}else{
				document.svg.width = window.innerWidth;
				document.svg.height = window.innerWidth*ratio;
			}
		}
	};
	xhttp.open("GET", "img/"+str, true);
	xhttp.send();
}
