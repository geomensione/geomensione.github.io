"use strict";

var newSprites = {
'doc_boy':[
 '00000GGGGGG00000',
 '0000GPPPPPPG0000',
 '000GPPPPPPPPG000',
 '00PPPPPPPPPPPP00',
 '0pPPPPAPPAPPPPp0',
 '0pPPPPPPPPPPPPp0',
 '00pPPPPPPPPPPp00',
 '000GPPPppPPPG000',
 '000GGPPPPPPGG000',
 '0000000PP0000000',
 '000PAAAAAAAAP000',
 '00000AAAAAA00000',
 '00000AAAAAA00000',
 '00PP0AAAAAA0PP00',
 '00PPAAAAAAAAPP00',
 '00PPAAAAAAAAPP00',
 '00PPAAAAAAAAPP00',
 '00PPAAAAAAAAPP00'
]
}

function colorPixel(i,ii,c){
  switch(c){
    case 'G':
      lr['fb'][i][ii] = ['FF','FF','00'];
      break;
    case 'A':
      lr['fb'][i][ii] = ['AA','AA','FF'];
      break;
    case 'P':
      lr['fb'][i][ii] = ['FF','AA','AA'];
      break;
    case 'p':
      lr['fb'][i][ii] = ['FF','77','77'];
      break;
    case 'B':
      lr['fb'][i][ii] = ['00','00','00'];
      break;
      
    
  }
  
}
