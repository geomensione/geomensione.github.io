js13kgames-Back

project wip [https://geomensione.github.io/JS13KGames-Back](https://geomensione.github.io/JS13KGames-Back)

"from end to start!"

read octal number to binary string

padleft(parseInt('string octal',8).toString(2),8,'0')

padleft(str,numchar,char){
    for(let diff = numchar - str.length;diff>=0;diff--) str = char+str;
}

ToDo:

promise all in gameback.js
