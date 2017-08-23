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
		'10001',
		'11110'		
	],
	'6': [
		'01111',
		'10001',
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
		'10100',
		'10011',
		'01110'		
	],
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

function drawText(text) {
	var x = 1;
	var y = 1;
	for(var i=0; i < text.length; i++) {
		x += drawLetter(x, y, text.charAt(i), rgb['blue']) + 1;
	}
}

function drawLetter(x, y, chr, c) {
	var l = chars[chr];
    if(!l) { return 0; }
	for(var i=0; i < l[0].length; i++) {
		for(var j=0; j < l.length; j++) {
			if(l[j].charAt(i) === "1") {
				lr['fb'][x+i][y+j] = [c[0],c[1],c[2]];
			}
		}
	}
	return l[0].length;
}
