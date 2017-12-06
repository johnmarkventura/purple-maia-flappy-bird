/* global game, Phaser, playState, menuState, mainMenuState */

var button;

var menuState = {
    
    
    preload: function() { 
        game.load.spritesheet('button', 'assets/images/retry_btn.png', 193, 71);
        
        game.pageAlignHorizontally = true
        game.pageAlignVertically = true
    },
    
    
    create: function() {
        button = game.add.button(game.world.centerX - 95, 200,'button', this.startGame)
    },
    
    
    update: function() {
        
    },

    startGame: function() {
        // game.state.start('play');
    }

};
