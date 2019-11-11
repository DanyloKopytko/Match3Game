class Preloader extends Phaser.State {
    preload() {
        this.load.audio('backgroundMusic', '../assets/audio/background.mp3');
        this.load.audio('destroyDonutsSound', '../assets/audio/kill.mp3');
        this.load.audio('swapSound', '../assets/audio/select-1.mp3');
        this.load.image('backgroundImage', '../assets/images/backgrounds/background.jpg');
        this.load.image('donut', '../assets/images/donut.png');
        this.load.image('donutShadow', '../assets/images/big-shadow.png');
        this.load.image('soundButton', '../assets/images/btn-sfx.png');
        this.load.image('donutsLogo', '../assets/images/donuts_logo.png');
        this.load.image('playBtn', '../assets/images/btn-play.png');
        this.load.image('cursor', '../assets/images/game/hand.png');
        this.load.image('howToPlayBtn', '../assets/images/btn-howToPlay.png');
        this.load.image('scoreTable', '../assets/images/bg-score.png');
        this.load.image('timeUp', '../assets/images/text-timeup.png');
        this.load.images(
            ['red-01', 'blue-02', 'green-03', 'lightBlue-04', 'yellow-05', 'pink-06'],
            [
                '../assets/images/game/gem-01.png', '../assets/images/game/gem-02.png', '../assets/images/game/gem-03.png',
                '../assets/images/game/gem-04.png', '../assets/images/game/gem-05.png', '../assets/images/game/gem-06.png'
            ]
        );
        this.load.images(
            [
                '1-particle', '2-particle', '3-particle', '4-particle', '5-particle', '6-particle'
            ],
            [
                '../assets/images/particles/particle-1.png', '../assets/images/particles/particle-2.png', '../assets/images/particles/particle-3.png',
                '../assets/images/particles/particle-4.png', '../assets/images/particles/particle-5.png', '../assets/images/particles/particle-1.png',
            ]
        );
        this.load.image('returnButton', '../assets/images/btn-return.png');
        this.load.image('donutRed', '../assets/images/game/gem-01.png');
        this.load.image('donutBlue', '../assets/images/game/gem-02.png');
        this.load.image('returnToMainMenu', '../assets/images/btn-mainMenu.png');
    }

    create() {
        //creates music for whole game
        window['music'] = this.add.audio('backgroundMusic');
        window['music'].loop = true;

        window['music'].play();

        this.state.start('mainMenu');
    }
}

export default Preloader;
