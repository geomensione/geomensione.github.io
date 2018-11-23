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

            this.demonData[gC.level]['layers'].LW= Utils.random(1,7).toString();
            this.demonData[gC.level]['layers'].RW= this.demonData[gC.level]['layers'].LW;
            this.demonData[gC.level]['layers'].LB= Utils.random(1,7).toString();
            this.demonData[gC.level]['layers'].HE= Utils.random(1,7).toString();
            this.demonData[gC.level]['layers'].BO= Utils.random(1,7).toString();
            game.load.image('invaderLW', 'assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].LW.padStart(2,0)+'.png', 128, 128);
            game.load.image('invaderRW', 'assets/games/demons/dem_'+gC.level+'_RW_1_'+this.demonData[gC.level]['layers'].RW.padStart(2,0)+'.png', 128, 128);
            game.load.image('invaderLB', 'assets/games/demons/dem_'+gC.level+'_LB_2_'+this.demonData[gC.level]['layers'].LB.padStart(2,0)+'.png', 128, 128);
            game.load.image('invaderBO', 'assets/games/demons/dem_'+gC.level+'_BO_3_'+this.demonData[gC.level]['layers'].BO.padStart(2,0)+'.png', 128, 128);
            game.load.image('invaderHE', 'assets/games/demons/dem_'+gC.level+'_HE_4_'+this.demonData[gC.level]['layers'].HE.padStart(2,0)+'.png', 128, 128);
        
            //this.create();
    }
    
    create(){
        this.aliens = game.add.group();
        this.aliens.enableBody = true;
        this.aliens.physicsBodyType = Phaser.Physics.ARCADE;
        //nome immagine personalizzato
        //game.load.image('invaderLW', 'assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].LW.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_LW_1_'+this.demonData[gC.level]['layers'].LW.padStart(2,0)+'.png')
        let alienlw = this.aliens.create(400, 400, 'invaderLW');
        alienlw.anchor.setTo(0.5, 0.5);
        //game.load.image('invaderRW', 'assets/games/demons/dem_'+gC.level+'_RW_1_'+this.demonData[gC.level]['layers'].RW.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_RW_1_'+this.demonData[gC.level]['layers'].RW.padStart(2,0)+'.png')
        let alienrw = this.aliens.create(400, 400, 'invaderRW');
        alienrw.anchor.setTo(0.5, 0.5);
        //game.load.image('invaderLB', 'assets/games/demons/dem_'+gC.level+'_LB_2_'+this.demonData[gC.level]['layers'].LB.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_LB_1_'+this.demonData[gC.level]['layers'].LB.padStart(2,0)+'.png')
        let alienlb = this.aliens.create(400, 400, 'invaderLB');
        alienlb.anchor.setTo(0.5, 0.5);
        //game.load.image('invaderBO', 'assets/games/demons/dem_'+gC.level+'_BO_3_'+this.demonData[gC.level]['layers'].BO.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_BO_1_'+this.demonData[gC.level]['layers'].BO.padStart(2,0)+'.png')
        let alienbo = this.aliens.create(400, 400, 'invaderBO');
        alienbo.anchor.setTo(0.5, 0.5);
        //game.load.image('invaderHE', 'assets/games/demons/dem_'+gC.level+'_HE_4_'+this.demonData[gC.level]['layers'].HE.padStart(2,0)+'.png', 128, 128);
        console.log('assets/games/demons/dem_'+gC.level+'_HE_1_'+this.demonData[gC.level]['layers'].HE.padStart(2,0)+'.png')
        let alienhe = this.aliens.create(400, 400, 'invaderHE');
        alienhe.anchor.setTo(0.5, 0.5);
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
var dem
function preload() {
    dem = new Entity(); 
}

function create() {
    dem.create()    
}
var aliens;

function update() {


}

function render() {


}
