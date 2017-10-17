var utils = (function (_b){
	return{
		write_dom: function(str){
			_b.innerHTML += str+'<br /> ';
		},
		
	}
})(b);

var canvas = (function (_c){
	var ctx;
	var canvas_text_x,
		canvas_text_y;
	return{
		init2d: function(){
			ctx = c.getContext('2d');
			ctx.font = "30px Arial";
		},
		init3d: function(){
			ctx = c.getContext('webgl');
		},
		write_2d:function(str,x,y){
			if(x) canvas_text_x = x;
			if(y) canvas_text_y = y;
			ctx.fillText(str,canvas_text_x,canvas_text_y);
			canvas_text_y += 30;
		},
		write_3d: function(){
			
		}
	}
})(c);

var app = (function(_h,_b,_c){
	
	function init(){
		canvas.init2d();
		if(_h)
			canvas.write_2d('header',10,50);
		if(_b)
			canvas.write_2d('body')
		if(_c)
			canvas.write_2d('canvas')
	}
	
	return{
		init: init
	}
})(h,b,c);

app.init();	
