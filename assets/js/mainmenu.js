/* global game, Phaser, playState, menuState, mainMenuState */

var startBtn;

var mainMenuState = {
    
    
    preload: function() { 
        game.load.spritesheet('startBtn', 'assets/images/strart_btn.png',i93,)
        
        game.stage.backgroundColor = '#8185d5';
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVerically = true;
    },
    
    
    create: function() {
        startBtn = game.add.button(game.world.centerX-95, 200, 'startBtn', this.startGame, this, 2, 1, 0);
        
        var spaceKey = game.input.keyboard.addKey(Phaser.keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame, this);
    },
    
    
    update: function() {
        
    },

    startGame: function() {
       // game.state.start('play');
    }

};
