var game = new Phaser.Game(1100, 900, Phaser.WEBGL, "", {preload: preload, create: create, update: update});

function preload() {
    game.load.image("bg", "assets/bg.jpg");
    game.load.image("tile", "assets/tile.png");
    game.load.image("cat", "assets/animal/1.png");
    game.load.image("dog", "assets/animal/2.png");
    game.load.image("elephant", "assets/animal/3.png");
    game.load.image("monkey", "assets/animal/4.png");
    game.load.image("horse", "assets/animal/5.png");
    game.load.image("kangaroo", "assets/animal/6.png");
    game.load.image("lion", "assets/animal/7.png");
    game.load.image("pig", "assets/animal/8.png");
    game.load.image("rabbit", "assets/animal/9.png");
    game.load.image("ship", "assets/animal/10.png");
};

var tiles;
var sprite;
var tile;
var animal;
var cat = "cat";
var dog = "dog";
var elephant = "elephant";
var monkey = "monkey";
var horse = "horse";
var kangaroo = "kangaroo";
var lion = "lion";
var pig = "pig";
var rabbit = "rabbit";
var ship = "ship";
var animalkey
var arr = [];
var firstClick;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.sprite(0, 0, "bg");
    game.add.sprite(0, 720, "bg");

    tiles = game.add.group();
    tiles.enableBody = true;
    
    var k = 1;
    for(var j=0; j<4; j++) {
        for(var i = 0; i < 5; i++) {
            tile = tiles.create(i * 220, j *220, "tile")
            tile.inputEnabled = true;
            tile.id = k;
            tile.events.onInputDown.add((tile) => {
                console.log(tile);
                function fun(a, b, animalName) {
                    if(tile.id == a || tile.id == b) {
                        game.add.tween(tile).to({
                            alpha: 0
                        },1000, Phaser.Easing.Linear.None, true, 0, 0, false)
                        game.add.tween(tile).to({
                            alpha: 0
                        },1000, Phaser.Easing.Linear.None, true, 0, 0, false).onComplete.addOnce(() => {
                            firstClick = animal;
                            animal = game.add.sprite(tile.world.x, tile.world.y, animalName)
                            animalkey = animal.key;
                            if(arr.length >= 2) {
                                arr = [];
                                arr.push(animalkey);
                            } else {
                                arr.push(animalkey)
                            }

                            if(arr.length >= 2) {
                                if(arr[0] != arr[1]) {
                                    
                                    game.add.tween(firstClick).to({
                                        alpha: 0,
                                    },1000, Phaser.Easing.Linear.None, true, 0, 0, false).onComplete.addOnce(() =>{
                                        game.add.sprite(firstClick.world.x, firstClick.world.y, "tile")
                                        // tile.id = 1
                                    })

                                    game.add.tween(animal).to({
                                        alpha: 0
                                    },1000, Phaser.Easing.Linear.None, true, 0, 0, false).onComplete.addOnce(() => {
                                        // tile.id = 2
                                        game.add.sprite(animal.world.x, animal.world.y, "tile")
                                    })
                                }
                            }
                        });
                    }
                }
                fun(8, 1, cat);
                fun(2, 5, dog)
                fun(6, 9, elephant)
                fun(4, 17, monkey);
                fun(10, 14, horse)
                fun(16, 20, kangaroo)
                fun(12, 13, lion)
                fun(3, 7, pig)
                fun(11, 15, rabbit)
                fun(18, 19, ship)
            })
            if(k >= 20) {
                k = 1
            }else {
                k++;
            }
        }
    }
        
};
        
function update() {

};


