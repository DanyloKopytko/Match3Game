import {checkMusic, createCustomButton} from '../objects';

class TutorialState extends Phaser.State {
    create() {
        this.add.sprite(0, 0, 'backgroundImage');

        const soundButton = createCustomButton(this, 10, 10, 'soundButton', 80, 80, () => {
            if (window['music'].mute) {
                window['music'].mute = false;

                soundButton.tint = 0xFFFFFF;
            } else {
                soundButton.tint = 0xff0000;

                window['music'].mute = true;
            }
        });

        checkMusic(soundButton);

        const returnBtn = createCustomButton(this, this.world.centerX + 110, this.world.centerY + 350, 'returnButton', 230, 150, () => {
            this.state.start('mainMenu');
        });

        returnBtn.anchor = {
            x: 1,
            y: 1
        };

        const tutorialText1 = this.add.text(
            this.world.centerX + 300, this.world.centerY - 80,
            '          How to play \nYou have to make a horizontal or vertical line of 3 or more same donuts',
            {fontSize: '48px', fill: 'violet', font: "Fredoka One", wordWrap: true, wordWrapWidth: 650}
        );

        tutorialText1.anchor = {
            x: 1,
            y: 1
        };

        this.add.sprite(this.world.centerX - 295, this.world.centerY - 90, 'donutRed');
        this.add.sprite(this.world.centerX - 215, this.world.centerY - 90, 'donutRed');
        this.add.sprite(this.world.centerX - 135, this.world.centerY - 90, 'donutRed');

        this.add.sprite(this.world.centerX + 30, this.world.centerY - 90, 'donutBlue');
        this.add.sprite(this.world.centerX + 110, this.world.centerY - 90, 'donutBlue');
        this.add.sprite(this.world.centerX + 190, this.world.centerY - 90, 'donutBlue');

        const tutorialText2 = this.add.text(
            this.world.centerX + 270, this.world.centerY + 208,
            'You have 30 seconds so get as much score as you can.',
            {font: "50px Fredoka One", fill: 'violet', wordWrap: true, wordWrapWidth: 600}
        );

        tutorialText2.anchor = {
            x: 1,
            y: 1
        };
    }
}
export default TutorialState;
