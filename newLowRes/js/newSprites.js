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
  var rgbColor = [];
  switch(c){
    case 'G':
      rgbColor = ['FF','FF','00'];
      break;
    case 'A':
      rgbColor = ['AA','AA','FF'];
      break;
    case 'P':
      rgbColor = ['FF','AA','AA'];
      break;
    case 'p':
      rgbColor = ['FF','77','77'];
      break;
    default:
      rgbColor = ['00','00','00'];
      break;
      
    
  }
  lr['fb'][i][ii] = rgbColor;
  
}
