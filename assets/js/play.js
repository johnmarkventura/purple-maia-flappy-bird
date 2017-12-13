/* global game, Phaser, playState, menuState, mainMenuState */

var playState = {

    preload: function() { 
        // scale the game if it's on a device
        if (!game.device.desktop)
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setMinMax(game.width/2, game.height/2, game.width, game.height);
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVerically = true;
        game.stage.backgroundColor = '#8185d5';
    
        //preload pipes and banana
        game.load.image('bird', 'assets/images/banana.png');
        game.load.image('pipe', 'assets/images/pipe.png');
        
        //load the jump sound
        game.load.audio('jump', 'assets/audio/jump.m4a');
    },
    create: function() { 
        //this is the pysics function/option
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // create our pipes group
        this.pipe = game.add.group();
        
        //our timer
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        
        //add bird to stage
        this.bird = game.add.sprite(100, 245, 'bird');
        
        //enable ohysics for the bird
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;
        
        //anchor position
        this bird.anchor.setTo(-0.2, 0.5);
        
        //create jump key
        var spaceKey = game.input.keyboard.addKey(Phaser.keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
        game.input.onDown.add(this.jump, this);
        
        this.score = 0;
        this.labelScore = game.add.text(20, 20, "0");
        
        //add the jump sound
        this.jumpSound = game.add.audio('jump');
        this.jumpSound.volume = 0.2;
        
        
    },
    
    update: function()  {
        //restart the game if our player went off stage
        if (this.bird.y < 0  ||) {
            
            }
        
        
    }
},