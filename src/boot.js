import { MainMenu } from 'states/MainMenu';
import Preloader from './states/Preloader';
import TutorialState from './states/TutorialState';
import PlayState from './states/PlayState';
import GameOverState  from './states/GameOverState';

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
