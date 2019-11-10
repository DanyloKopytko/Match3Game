import {createCustomButton} from '../objects/createCustomButton';
import {checkMusic} from "../objects/chechMusic";
import {createCustomSprite} from '../objects/createCustomSprite';
import {animate} from '../objects/animateSprite';

class GameOverState extends Phaser.State{
    create() {
        this.add.sprite(0, 0, 'backgroundImage');

        let soundButton = createCustomButton(this, 10, 10, 'soundButton', 80, 80, () => {
            if (window['music'].mute) {
                window['music'].mute = false;

                soundButton.tint = 0xFFFFFF;
            } else {
                window['music'].mute = true;

                soundButton.tint = 0xff0000;
            }
        });

        checkMusic(soundButton);

        let timeUp = createCustomSprite(this, this.world.centerX + 500, this.world.centerY - 100, 'timeUp', 440, 100);
        timeUp.anchor.setTo(0.5, 0.5);

        animate(this, timeUp, this.world.centerX + 500, this.world.centerX);

        let yourScore = this.add.text(this.world.centerX + 1000, this.world.centerY, `Your score: ${window['score']}`, {font: "50px Fredoka One", fill: "red"});
        yourScore.anchor.setTo(0.5, 0.5);

        animate(this, yourScore, this.world.centerX + 1000, this.world.centerX);

        let returnBtn = createCustomButton(this, this.world.centerX + 1500, this.world.centerY + 100, 'returnToMainMenu', 230, 150, () => {
            this.state.start('mainMenu');
        });
        returnBtn.anchor.setTo(0.5, 0.5);

        animate(this, returnBtn, this.world.centerX + 1500, this.world.centerX);
    }
}

export default GameOverState;
