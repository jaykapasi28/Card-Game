var game = new Phaser.Game(1100, 1920, Phaser.AUTO, "", {preload: preload, create: create, update: update});

function preload() {
    game.load.image("bg", "assets/bg.jpg");
    game.load.image("tile", "assets/tile.png")
};

var tiles;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, "bg");

    tiles = game.add.group();
    tiles.enableBody = true;

    for(var j=0; j<4; j++) {

        for(var i = 0; i < 5; i++) {
            var tile =  tiles.create(i * 220, j*220, "tile");
        }
    }
    

};

function update() {

};