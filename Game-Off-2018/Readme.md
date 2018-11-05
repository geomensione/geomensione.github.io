npm init

npm install phaser

---

npm imstall http-server -g

http-server . --cors

Examples

https://github.com/photonstorm/phaser3-examples

Direi che occorrerebbe ruotare la nave di 90° in senso orario e vincolarla in fondo allo schermo. Opterei per scegliere una risoluzione fissa 
Risoluzione proposta:  448 pixel orizzontali; 600 pixel verticali  
questo mi permette di fare la pixel art più congruente. 

A livello di "innovazione" ci sarebbe una delle mie idee fisse, la modularità. In pratica i demoni sono fatti ad esempio da 5-6 parti, testa (HE), corpo (BO), parte bassa del corpo (LB), ala sinistra (LW), ala destra (RW), zampa sinistra (LA) e zampa destra (RA). 
In allegato puoi vedere alcuni layer di esempio (però li ho realizzati prima di definire la risoluzione, se mai modifichiamo quella se sono troppo grandi). Non ci sono le zampe. 

C'è una naming policy: 
dem_A_BO_3_01: demone dei livelli di tipo A, BODY, zindex 3 , ID del layer grafico 01, 
dem_A_HE_4_01: demone dei livelli di tipo A, HEAD,  zindex 4, ID del layer grafico 01, 
dem_A_LB_2_05: demone dei livelli di tipo A, LOWER BODY,  zindex 2, ID del layer grafico 05, 
dem_A_LW_1_02: demone dei livelli di tipo A, LEFT WING,  zindex 1, ID del layer grafico 02, 

Poi ne deriva che i pezzi determinano i comportamenti del demone in termini di: 

testa: pattern di movimento
ali: velocità, subpattern di movimento
zampe: tipo di proiettili
corpo: resistenza e altri attributi

Per quanto riguarda il Player1, invece di una navicella, ma adesso va bene così, si poteva tirar fuori un meccanismo semplice e funzionale per riusare parti dei nemici distrutti. andrebbero catturate/agganciate con un microgioco, tipo sparare con un altro proiettile o cose così. Deve ancora venirmi una buona idea. 

Per quanto riguarda gli effetti sonori, i demoni borbottano delle parolacce in tedesco, distorto in metallico con un DAW qualsiasi. (faccio io). 

Mi sembra che ne avevamo parlato in uno dei nostri pranzi, non so se te ne ricordi ancora. E' una idea che mi porto dietro da parecchio. Non è geniale ma mi sembra divertente. Comunque può diventare abbastanza divertente lavorandoci per bene. 
