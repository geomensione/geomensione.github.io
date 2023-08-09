export default class LoaderScene extends Phaser.Scene {
  public preload() {
    this.load.image("tiles", "./assets/images/tiles.png");
    this.load.audio("jump", "./assets/audio/jump.mp3");
    this.load.spritesheet("player", "./assets/images/hero.png", { frameWidth: 16, frameHeight: 16 });
  }

  public create() {
    this.scene.start("game");
  }
}
