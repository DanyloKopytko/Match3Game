import {GameOverState, MainMenu, PlayState, Preloader, TutorialState} from './states';

class Game extends Phaser.Game {

	constructor() {
		super(614.4 , 750, Phaser.AUTO);

		this.state.add('mainMenu', MainMenu, false);
		this.state.add('preloader', Preloader, false);
		this.state.add('tutorialState', TutorialState, false);
		this.state.add('playState', PlayState, false);
		this.state.add('gameOverState', GameOverState, false);

		this.state.start('preloader');
	}

}

new Game();
