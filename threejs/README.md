todo:
  scala ingrandisce solo
  se scelgo una sfera di tipo interpolate, la trasformo in una f3d_sphere (aggiungo la fera alla scena e poi memorizzo il riferimento in f3d_scene?): 
    prima
      aggiungo oggetto scena
      aggiungo riferimento, dell' oggetto della scena,
      aggiungo l'oggetto a objects, per il picking (???) -> provo con scene
      
    ora
      faccio il picking sull'intera scena
      aggiungo oggetto alla scena
      aggiungo il riferimento alla f3d_scene
      se scelgo un interpolate -> lo rinomino in f3d_scene_...
      aggiungo il riferimento nella f3d_scene, in mezzo ai riferimenti delle due sfere che formano il collegamento -> bisogna aggiornare la scene perché altrimenti rimangono i vecchi id nei nomi degli oggetti
