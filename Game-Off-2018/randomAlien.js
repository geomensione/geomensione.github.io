var utils = class{
    constructor(){}
    random(s,e){
        return Math.floor(Math.random() * (e - s + 1)) + s;
    }
}

var Utils = new utils();

var Entity = class {
        constructor(level){
            this.demonData = {'A':	    
            {	        
                  "data": "demon",
                  "width": 240,	
                  "original_width": 128,
                  "layers": {	    
                    "LW": "",	    
                    "RW": "",	    
                    "LB": "",	    
                    "HE": "",
                    "BO":""
                  }	
                }	
            }
            this.aliens;

            this.demonData[gC.level]['layers'].LW= Utils.random(1,3).toString();
            this.demonData[gC.level]['layers'].RW= this.demonData[gC.level]['layers'].LW;
            this.demonData[gC.level]['layers'].LB= Utils.random(1,3).toString();
            this.demonData[gC.level]['layers'].HE= Utils.random(1,3).toString();
            this.demonData[gC.level]['layers'].BO= Utils.random(1,3).toString();
            this.create();
    }
    
    create(){
        this.aliens = game.add.group();
        this.aliens.enableBody = true;
        this.aliens.physicsBodyType = Phaser.Physics.ARCADE;
        //nome immagine personalizzato
        game.load.image('invaderLW', 'assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].LW.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].LW.padStart(2,0)+'.png')
        this.aliens.create(400, 400, 'invaderLW');
        game.load.image('invaderRW', 'assets/games/demons/dem_'+gC.level+'_RW_1_'+this.demonData[gC.level]['layers'].RW.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].RW.padStart(2,0)+'.png')
        this.aliens.create(400, 400, 'invaderRW');
        game.load.image('invaderLB', 'assets/games/demons/dem_'+gC.level+'_LB_2_'+this.demonData[gC.level]['layers'].LB.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].LB.padStart(2,0)+'.png')
        this.aliens.create(400, 400, 'invaderLB');
        game.load.image('invaderBO', 'assets/games/demons/dem_'+gC.level+'_BO_3_'+this.demonData[gC.level]['layers'].BO.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].BO.padStart(2,0)+'.png')
        this.aliens.create(400, 400, 'invaderBO');
        game.load.image('invaderHE', 'assets/games/demons/dem_'+gC.level+'_HE_4_'+this.demonData[gC.level]['layers'].HE.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].HE.padStart(2,0)+'.png')
        this.aliens.create(400, 400, 'invaderHE');
        var tween = game.add.tween(this.aliens).to( { x: 150 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        tween.onLoop.add(()=>{this.aliens.y += 10;}, this);
    }
    move(x,y){
    }
    fire(){
    }
    hit(){
    }

}

//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var gC = {
    width: 600,
    height: 448,
    level:'A'
};


var game = new Phaser.Game(
    gC.width, 
    gC.height, 
    Phaser.AUTO, 
    'phaser-example', 
    { 
        preload: preload, 
        create: create, 
        update: update, 
        render: render 
    }
);

function preload() {
    var dem = new Entity();
    /*
    game.load.spritesheet('invader', 'assets/games/invaders/invader32x32x4.png', 32, 32);
    var data = demonData[gC.level];
    //dem_A_BO_3_01: demone dei livelli di tipo A, BODY, zindex 3 , ID del layer grafico 01,
    
    "LW": "3",
    "RW": "3",
    "LB": "4",
    "BO": "2",
    "HE": "1"
    dem_A_BO_3_01.png	
    dem_A_HE_4_01.png	
    dem_A_LB_2_01.png	
    dem_A_LW_1_01.png	
    dem_A_RW_1_01.png
    
    game.load.image('invaderLW', 'assets/games/demons/dem_'+gC.level+'_LW_1_'+data.layers['LW'].padStart(2,0)+'.png', 128, 128);
    game.load.image('invaderRW', 'assets/games/demons/dem_'+gC.level+'_RW_1_'+data.layers['RW'].padStart(2,0)+'.png', 128, 128);
    game.load.image('invaderLB', 'assets/games/demons/dem_'+gC.level+'_LB_2_'+data.layers['LB'].padStart(2,0)+'.png', 128, 128);
    game.load.image('invaderBO', 'assets/games/demons/dem_'+gC.level+'_BO_3_'+data.layers['BO'].padStart(2,0)+'.png', 128, 128);
    game.load.image('invaderHE', 'assets/games/demons/dem_'+gC.level+'_HE_4_'+data.layers['HE'].padStart(2,0)+'.png', 128, 128);
    */
}

function create() {
    /*
    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;
    createAliens();
    */
    
}
var aliens;
function createAliens () {

    //random demon creator from game difficult level
    //...
    //test
    
    /*
    var alienlw = aliens.create(200, 200, 'invaderLW');
    alienlw.anchor.setTo(0.5, 0.5);
    alienlw.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    alienlw.play('fly');
    alienlw.body.moves = false;
    var alienrw = aliens.create(200, 200, 'invaderRW');
    alienrw.anchor.setTo(0.5, 0.5);
    alienrw.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    alienrw.play('fly');
    alienrw.body.moves = false;
    var alienlb = aliens.create(200, 200, 'invaderLB');
    alienlb.anchor.setTo(0.5, 0.5);
    alienlb.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    alienlb.play('fly');
    alienlb.body.moves = false;
    var alienbo = aliens.create(200, 200, 'invaderBO');
    alienbo.anchor.setTo(0.5, 0.5);
    alienbo.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    alienbo.play('fly');
    alienbo.body.moves = false;
    var alienhe = aliens.create(200, 200, 'invaderHE');
    alienhe.anchor.setTo(0.5, 0.5);
    alienhe.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
    alienhe.play('fly');
    alienhe.body.moves = false;
    
    aliens.x = 100;
    aliens.y = 50;

    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
    var tween = game.add.tween(aliens).to( { x: 150 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    //  When the tween loops it calls descend
    tween.onLoop.add(descend, this);
    */
}

function setupInvader (invader) {


}

function descend() {

    aliens.y += 10;

}

function update() {


}

function render() {


}

function collisionHandler (bullet, alien) {


}

function enemyHitsPlayer (player,bullet) {
    

}

function enemyFires () {

    //  Grab the first bullet we can from the pool
    enemyBullet = enemyBullets.getFirstExists(false);

    livingEnemies.length=0;

    aliens.forEachAlive(function(alien){

        // put every living enemy in an array
        livingEnemies.push(alien);
    });


    if (enemyBullet && livingEnemies.length > 0)
    {
        
        var random=game.rnd.integerInRange(0,livingEnemies.length-1);

        // randomly select one of them
        var shooter=livingEnemies[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(shooter.body.x, shooter.body.y);

        game.physics.arcade.moveToObject(enemyBullet,player,120);
        firingTimer = game.time.now + 2000;
    }

}

function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game.time.now > bulletTime)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(player.x, player.y + 8);
            bullet.body.velocity.y = -400;
            bulletTime = game.time.now + 200;
        }
    }

}

function resetBullet (bullet) {

    //  Called if the bullet goes out of the screen
    bullet.kill();

}

function restart () {

    

}
