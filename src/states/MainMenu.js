import {checkMusic, animate, createCustomButton, createCustomSprite} from '../objects';

export class MainMenu extends Phaser.State {
    create() {
        this.add.sprite(0, 0, 'backgroundImage');

        this.game.canvas.style.cursor = "default";

        const soundButton = createCustomButton(this, 900, 10, 'soundButton', 80, 80, () => {
            if (window['music'].mute) {
                window['music'].mute = false;

                soundButton.tint = 0xFFFFFF;
            } else {
                soundButton.tint = 0xff0000;

                window['music'].mute = true;
            }
        });

        checkMusic(soundButton);

        animate(this, soundButton, 900, 10);

        const donutShadow = createCustomSprite(this, this.world.centerX + 35, this.world.centerY, 'donutShadow', 450, 450);
        donutShadow.anchor.setTo(0.5, 0.5);

        const donut = createCustomSprite(this,this.world.centerX, this.world.centerY, 'donut', 450, 450);
        donut.anchor.setTo(0.5, 0.5);

        const donutsLogo = createCustomSprite(this,this.world.centerX + 1050, this.world.centerY - 225, 'donutsLogo', 480, 170);
        donutsLogo.anchor.setTo(0.5, 0.5);

        animate(this, donutsLogo, this.world.centerX + 1050, this.world.centerX);

        const playBtn = createCustomButton(this, this.world.centerX + 1150, this.world.centerY + 120, 'playBtn', 230, 150, () => {
            this.state.start('playState');
        });
        playBtn.anchor.setTo(0.5, 0.5);

        animate(this, playBtn, this.world.centerX + 1200, this.world.centerX);

        const howToPlayBtn = createCustomButton(this, this.world.centerX + 1250, this.world.centerY + 280, 'howToPlayBtn', 210, 130, () => {
            this.state.start('tutorialState');
        });
        howToPlayBtn.anchor.setTo(0.5, 0.5);

        animate(this, howToPlayBtn, this.world.centerX + 1300, this.world.centerX);
    }
}
