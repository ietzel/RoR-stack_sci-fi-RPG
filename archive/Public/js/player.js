class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, "player");
        scene.add.existing(this);
        this.Player = new Player(this, 500, 500);
    }
}