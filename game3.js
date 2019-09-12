var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

    game.load.image('mouse', 'assets/sprites/ground.png');

}

function create() {

    game.stage.backgroundColor = '#943021';

    var sprite = game.add.sprite(0, 100, 'mouse');

    sprite.inputEnabled = true;

    sprite.events.onInputDown.add(click, this);

    game.input.mouse.capture = true;

}

function click (sprite, pointer) {

    console.log(pointer.leftButton.isDown);
    console.log(pointer.rightButton.isDown);

}

function render() {

    game.debug.text("Left Button: " + game.input.activePointer.leftButton.isDown, 300, 132);
    game.debug.text("Middle Button: " + game.input.activePointer.middleButton.isDown, 300, 196);
    game.debug.text("Right Button: " + game.input.activePointer.rightButton.isDown, 300, 260);

}