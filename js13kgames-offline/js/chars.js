var chars = {
	'A': [
		'00100',
		'01010',
		'10001',
		'11111',
		'10001'
	],
	'B': [
		'11110',
		'10001',
		'11110',
		'10001',
		'11111'
	],
	'C': [
		'01111',
		'10000',
		'10000',
		'10000',
		'01111'
	],
	'D': [
		'11110',
		'10001',
		'10001',
		'10001',
		'11111'
	],
	'E': [
		'11111',
		'10000',
		'11100',
		'10000',
		'11111'
	],
	'F': [
		'11111',
		'10000',
		'11100',
		'10000',
		'10000'
	],
	'G': [
		'01111',
		'10000',
		'10011',
		'10001',
		'01110'
	],
	'H': [
		'10001',
		'10000',
		'11111',
		'10001',
		'10001'
	],
	'I': [
		'00100',
		'00100',
		'00100',
		'00100',
		'00100'		
	],
	'J': [
		'00001',
		'00001',
		'00001',
		'10001',
		'01110'		
	],
	'K': [
		'10001',
		'10010',
		'11100',
		'10010',
		'10001'		
	],
	'L': [
		'10000',
		'10000',
		'10000',
		'10000',
		'11111'		
	],
	'M': [
		'10001',
		'11011',
		'10101',
		'10001',
		'10001'		
	],
	'N': [
		'10001',
		'11001',
		'10101',
		'10011',
		'10001'
	],
	'O': [
		'01110',
		'10001',
		'10001',
		'10001',
		'01110'		
	],
	'P': [
		'11110',
		'10001',
		'11110',
		'10000',
		'10000'		
	],
	'Q': [
		'01110',
		'10001',
		'10101',
		'10011',
		'01110'		
	],
	'R': [
		'11110',
		'10001',
		'11110',
		'10001',
		'10001'		
	],
	'S': [
		'01111',
		'10000',
		'01110',
		'00001',
		'11110'		
	],
	'T': [
		'11111',
		'00100',
		'00100',
		'00100',
		'00100'		
	],
	'U': [
		'10001',
		'10001',
		'10001',
		'10001',
		'01110'		
	],
	'V': [
		'10001',
		'10001',
		'10001',
		'01010',
		'00100'		
	],
	'W': [
		'10001',
		'10101',
		'10101',
		'10101',
		'01010'		
	],
	'X': [
		'10001',
		'01010',
		'00100',
		'01010',
		'10001'		
	],
	'Y': [
		'10001',
		'01010',
		'00100',
		'00100',
		'00100'		
	],
	'Z': [
		'11111',
		'00010',
		'00100',
		'01000',
		'11111'		
	],
	'!': [
		'00100',
		'00100',
		'00100',
		'00000',
		'00100'		
	],
	'.': [
		'00000',
		'00000',
		'00000',
		'00000',
		'00100'		
	],
	' ': [
		'00000',
		'00000',
		'00000',
		'00000',
		'00000'		
	],
	'1': [
		'00010',
		'00110',
		'01010',
		'00010',
		'00010'		
	],
	'2': [
		'01110',
		'10001',
		'00010',
		'01100',
		'11111'		
	],
	'3': [
		'11110',
		'00001',
		'00110',
		'00001',
		'11110'		
	],
	'4': [
		'00010',
		'00110',
		'01010',
		'11111',
		'00010'		
	],
	'5': [
		'11111',
		'10000',
		'11110',
		'00001',
		'11110'		
	],
	'6': [
		'01111',
		'10000',
		'11110',
		'10001',
		'01110'		
	],
	'7': [
		'11111',
		'00001',
		'00010',
		'00100',
		'01000'		
	],
	'8': [
		'01110',
		'10001',
		'01110',
		'10001',
		'01110'		
	],
	'9': [
		'01110',
		'10001',
		'01111',
		'00001',
		'01110'		
	],
	'0': [
		'01110',
		'11001',
		'10101',
		'10011',
		'01110'		
	],
	'-': [
		'00000',
		'00000',
		'01110',
		'00000',
		'00000'				
	]
}

sh = {
         39:[  'W0W00000',
            'W0WW0000',
            'WWWWW000',
            'WWW0WWWW',
            'WWW0WWWW',
            'WWWWW000',
            'W0WW0000',
            'W0W00000'],
        38:[
            '000WW000',
            '000WW000',
            '000WW000',
            '00WWWW00',
            '0WW00WW0',
            'WWWWWWWW',
            '00WWWW00',
            'WWWWWWWW'],
        37:[
            '00000W0W',
            '0000WW0W',
            '000WWWWW',
            'WWWW0WWW',
            'WWWW0WWW',
            '000WWWWW',
            '0000WW0W',
            '00000W0W'],
        40:[
            'WWWWWWWW',
            '00WWWW00',
            'WWWWWWWW',
            '0WW00WW0',
            '00WWWW00',
            '000WW000',
            '000WW000',
            '000WW000']
    };

en = {
	39:[  'W0W00000',
		   'W0WW0000',
		   'WWWWW000',
		   'WWW0WWWW',
		   'WWW0WWWW',
		   'WWWWW000',
		   'W0WW0000',
		   'W0W00000'],
	   38:[
		   '000WW000',
		   '000WW000',
		   '000WW000',
		   '00WWWW00',
		   '0WW00WW0',
		   'WWWWWWWW',
		   '00WWWW00',
		   'WWWWWWWW'],
	   37:[
		   '00000W0W',
		   '0000WW0W',
		   '000WWWWW',
		   'WWWW0WWW',
		   'WWWW0WWW',
		   '000WWWWW',
		   '0000WW0W',
		   '00000W0W'],
	   40:[
		   'WWWWWWWW',
		   '00WWWW00',
		   'WWWWWWWW',
		   '0WW00WW0',
		   '00WWWW00',
		   '000WW000',
		   '000WW000',
		   '000WW000']
   };

var hero = {0:[	'WWWWW',
				'W000W',
				'WWWWW',
				'0W0W0',
				'W0W0W']};
var u = {};
//tl -> text layer
u.drawText = (tl) => {
	var x = 1;
	var y = 1;
	for(var i=0; i < tl.sc.length; i++) {
		x += u.drawLetter(tl, x, y, tl.sc.charAt(i), ['EE','EE','11']) + 1;
	}
}

u.drawLetter = (tl, x, y, chr, c) => {
	var l = chars[chr];
    	if(!l) { return 0; }
	for(var i=0; i < l[0].length; i++) {
		for(var j=0; j < l.length; j++) {
			if(l[j].charAt(i) === "1") {
				if(tl['fb'] && tl['fb'][x+i] && tl['fb'][x+i][y+j])
					tl['fb'][x+i][y+j] = c;
			}
		}
	}
	return l[0].length;
}

u.setRandomValue = function(obj){
    obj.quy = random(3,true);
    obj.qux = random(3,true);
	console.log(`${obj.qux} ${obj.quy}`)
    //h.quy = 0;
    //h.qux = 0;
    obj.cx = random(obj.rx);
    obj.cy = random(obj.ry);
    obj.picked = false;
}

u.clear = (c,r,g,b) => {
	c.fillStyle = `rgb(${r}, ${g}, ${b})`;
    c.fillRect(0,0,la[0].w,la[0].h);
}