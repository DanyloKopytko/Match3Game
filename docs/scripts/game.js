(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _MainMenu = require('states/MainMenu');

var _Preloader = require('./states/Preloader');

var _Preloader2 = _interopRequireDefault(_Preloader);

var _TutorialState = require('./states/TutorialState');

var _TutorialState2 = _interopRequireDefault(_TutorialState);

var _PlayState = require('./states/PlayState');

var _PlayState2 = _interopRequireDefault(_PlayState);

var _GameOverState = require('./states/GameOverState');

var _GameOverState2 = _interopRequireDefault(_GameOverState);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 614.4, 750, Phaser.AUTO));

		_this.state.add('mainMenu', _MainMenu.MainMenu, false);
		_this.state.add('preloader', _Preloader2.default, false);
		_this.state.add('tutorialState', _TutorialState2.default, false);
		_this.state.add('playState', _PlayState2.default, false);
		_this.state.add('gameOverState', _GameOverState2.default, false);

		_this.state.start('preloader');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"./states/GameOverState":7,"./states/PlayState":9,"./states/Preloader":10,"./states/TutorialState":11,"states/MainMenu":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Donut = function Donut(height, width, index, sprite) {
    _classCallCheck(this, Donut);

    this.height = height;
    this.width = width;
    this.sprite = sprite; //sprite for this donut
    this.index = index; // 1 - 6
};

exports.default = Donut;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animate = animate;
function animate(game, item, start, end) {
    var stopNumber = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    if (stopNumber >= start - end) {
        return 0;
    }

    setTimeout(function () {
        item.x = start - stopNumber;

        stopNumber += 3;

        animate(game, item, start, end, stopNumber);
    }, 1);
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkMusic = checkMusic;
function checkMusic(soundButton) {
    if (window['music'].mute) {
        soundButton.tint = 0xff0000;
    } else {
        soundButton.tint = 0xFFFFFF;
    }
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCustomButton = createCustomButton;
function createCustomButton(game, x, y, image, width, height, cb) {
    var button = game.add.button(x, y, image, cb, game);

    button.width = width;
    button.height = height;

    return button;
}

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCustomSprite = createCustomSprite;
function createCustomSprite(game, x, y, image, width, height) {
    var sprite = game.add.sprite(x, y, image);

    sprite.width = width;
    sprite.height = height;

    return sprite;
}

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () {
        function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
        }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
}();

var _createCustomButton = require('../objects/createCustomButton');

var _chechMusic = require('../objects/chechMusic');

var _createCustomSprite = require('../objects/createCustomSprite');

var _animateSprite = require('../objects/animateSprite');

function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
        }
}

function _possibleConstructorReturn(self, call) {
        if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameOverState = function (_Phaser$State) {
        _inherits(GameOverState, _Phaser$State);

        function GameOverState() {
                _classCallCheck(this, GameOverState);

                return _possibleConstructorReturn(this, (GameOverState.__proto__ || Object.getPrototypeOf(GameOverState)).apply(this, arguments));
        }

        _createClass(GameOverState, [{
                key: 'create',
                value: function create() {
                        var _this2 = this;

                        this.add.sprite(0, 0, 'backgroundImage');

                        var soundButton = (0, _createCustomButton.createCustomButton)(this, 10, 10, 'soundButton', 80, 80, function () {
                                if (window['music'].mute) {
                                        window['music'].mute = false;

                                        soundButton.tint = 0xFFFFFF;
                                } else {
                                        window['music'].mute = true;

                                        soundButton.tint = 0xff0000;
                                }
                        });

                        (0, _chechMusic.checkMusic)(soundButton);

                        var timeUp = (0, _createCustomSprite.createCustomSprite)(this, this.world.centerX + 500, this.world.centerY - 100, 'timeUp', 440, 100);
                        timeUp.anchor.setTo(0.5, 0.5);

                        (0, _animateSprite.animate)(this, timeUp, this.world.centerX + 500, this.world.centerX);

                        var yourScore = this.add.text(this.world.centerX + 1000, this.world.centerY, 'Your score: ' + window['score'], { font: "50px Fredoka One", fill: "red" });
                        yourScore.anchor.setTo(0.5, 0.5);

                        (0, _animateSprite.animate)(this, yourScore, this.world.centerX + 1000, this.world.centerX);

                        var returnBtn = (0, _createCustomButton.createCustomButton)(this, this.world.centerX + 1500, this.world.centerY + 100, 'returnToMainMenu', 230, 150, function () {
                                _this2.state.start('mainMenu');
                        });
                        returnBtn.anchor.setTo(0.5, 0.5);

                        (0, _animateSprite.animate)(this, returnBtn, this.world.centerX + 1500, this.world.centerX);
                }
        }]);

        return GameOverState;
}(Phaser.State);

exports.default = GameOverState;

},{"../objects/animateSprite":3,"../objects/chechMusic":4,"../objects/createCustomButton":5,"../objects/createCustomSprite":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.MainMenu = undefined;

var _createClass = function () {
        function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
        }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
}();

var _createCustomButton = require('../objects/createCustomButton');

var _chechMusic = require('../objects/chechMusic');

var _createCustomSprite = require('../objects/createCustomSprite');

var _animateSprite = require('../objects/animateSprite');

function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
        }
}

function _possibleConstructorReturn(self, call) {
        if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MainMenu = exports.MainMenu = function (_Phaser$State) {
        _inherits(MainMenu, _Phaser$State);

        function MainMenu() {
                _classCallCheck(this, MainMenu);

                return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
        }

        _createClass(MainMenu, [{
                key: 'create',
                value: function create() {
                        var _this2 = this;

                        this.add.sprite(0, 0, 'backgroundImage');
                        console.log('123');
                        var soundButton = (0, _createCustomButton.createCustomButton)(this, 900, 10, 'soundButton', 80, 80, function () {
                                if (window['music'].mute) {
                                        window['music'].mute = false;

                                        soundButton.tint = 0xFFFFFF;
                                } else {
                                        soundButton.tint = 0xff0000;

                                        window['music'].mute = true;
                                }
                        });

                        (0, _chechMusic.checkMusic)(soundButton);

                        (0, _animateSprite.animate)(this, soundButton, 900, 10);

                        var donutShadow = (0, _createCustomSprite.createCustomSprite)(this, this.world.centerX + 35, this.world.centerY, 'donutShadow', 450, 450);
                        donutShadow.anchor.setTo(0.5, 0.5);

                        var donut = (0, _createCustomSprite.createCustomSprite)(this, this.world.centerX, this.world.centerY, 'donut', 450, 450);
                        donut.anchor.setTo(0.5, 0.5);

                        var donutsLogo = (0, _createCustomSprite.createCustomSprite)(this, this.world.centerX + 1050, this.world.centerY - 225, 'donutsLogo', 480, 170);
                        donutsLogo.anchor.setTo(0.5, 0.5);

                        (0, _animateSprite.animate)(this, donutsLogo, this.world.centerX + 1050, this.world.centerX);

                        var playBtn = (0, _createCustomButton.createCustomButton)(this, this.world.centerX + 1150, this.world.centerY + 120, 'playBtn', 230, 150, function () {
                                _this2.state.start('playState');
                        });
                        playBtn.anchor.setTo(0.5, 0.5);

                        (0, _animateSprite.animate)(this, playBtn, this.world.centerX + 1200, this.world.centerX);

                        var howToPlayBtn = (0, _createCustomButton.createCustomButton)(this, this.world.centerX + 1250, this.world.centerY + 280, 'howToPlayBtn', 210, 130, function () {
                                _this2.state.start('tutorialState');
                        });
                        howToPlayBtn.anchor.setTo(0.5, 0.5);

                        (0, _animateSprite.animate)(this, howToPlayBtn, this.world.centerX + 1300, this.world.centerX);
                }
        }]);

        return MainMenu;
}(Phaser.State);

},{"../objects/animateSprite":3,"../objects/chechMusic":4,"../objects/createCustomButton":5,"../objects/createCustomSprite":6}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _createCustomButton = require('../objects/createCustomButton');

var _DonutConstructor = require('../objects/DonutConstructor');

var _DonutConstructor2 = _interopRequireDefault(_DonutConstructor);

var _chechMusic = require('../objects/chechMusic');

var _createCustomSprite = require('../objects/createCustomSprite');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PlayState = function (_Phaser$State) {
    _inherits(PlayState, _Phaser$State);

    function PlayState() {
        _classCallCheck(this, PlayState);

        return _possibleConstructorReturn(this, (PlayState.__proto__ || Object.getPrototypeOf(PlayState)).apply(this, arguments));
    }

    _createClass(PlayState, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.add.sprite(0, 0, 'backgroundImage');

            this.destroySound = this.add.audio('destroyDonutsSound');
            this.selectSound = this.add.audio('swapSound');

            var startTimer = new Date();

            this.timeToPlay = 45;
            this.timeExpired = 0;

            var timeLabel = this.add.text(500, 38, "30", { font: "50px Fredoka One", fill: "red" });

            this.time.events.loop(100, function () {
                var currentTime = new Date();

                var timeDifference = startTimer.getTime() - currentTime.getTime();

                _this2.timeExpired = Math.abs(timeDifference / 1000);

                var timeRemaining = _this2.timeToPlay - _this2.timeExpired;

                var seconds = Math.floor(timeRemaining) - 60 * Math.floor(timeRemaining / 60);

                timeLabel.text = seconds;
            });

            var soundButton = (0, _createCustomButton.createCustomButton)(this, 10, 10, 'soundButton', 80, 80, function () {
                if (window['music'].mute) {
                    window['music'].mute = false;

                    soundButton.tint = 0xFFFFFF;
                } else {
                    window['music'].mute = true;

                    soundButton.tint = 0xff0000;
                }
            });

            (0, _chechMusic.checkMusic)(soundButton);

            var scoreTable = (0, _createCustomSprite.createCustomSprite)(this, this.world.centerX - 170, this.world.centerY - 380, 'scoreTable', 380, 150);

            this.scoreText = this.add.text(this.world.centerX - 20, this.world.centerY - 351, '0', {
                font: '58px Fredoka One',
                fill: 'red'
            });

            window['score'] = 0;

            this.donutWidth = this.cache.getImage('red-01').width;
            this.donutHeight = this.cache.getImage('red-01').height;

            this.indexes = {
                1: 'red-01',
                2: 'blue-02',
                3: 'green-03',
                4: 'lightBlue-04',
                5: 'yellow-05',
                6: 'pink-06'
            };

            this.canMove = false;

            this.mainMatrix = [[null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null]];

            this.generateArray();

            this.canMove = false;

            this.activeDonut1 = null;
            this.activeDonut2 = null;
        }
    }, {
        key: 'generateArray',
        value: function generateArray() {
            var _this3 = this;

            for (var i = 0; i < this.mainMatrix.length; i++) {
                for (var j = 0; j < this.mainMatrix.length; j++) {
                    var donut = this.addDonut(i, j);

                    this.mainMatrix[i][j] = donut;
                }
            }

            this.time.events.add(600, function () {
                _this3.checkMatch();
            });
        }
    }, {
        key: 'addDonut',
        value: function addDonut(x, y) {
            var _this4 = this;

            var randomIndex = Math.floor(Math.random() * 6 + 1);

            var donut = this.add.sprite(x * this.donutWidth + this.donutWidth / 2, 0, this.indexes[randomIndex]);

            this.add.tween(donut).to({ y: y * this.donutHeight + this.donutHeight / 2 + 120 }, 600, Phaser.Easing.Linear.In, true);

            var tempDonut = new _DonutConstructor2.default(this.donutHeight, this.donutWidth, randomIndex, donut);

            tempDonut.sprite.anchor.setTo(0.5, 0.5);

            tempDonut.sprite.inputEnabled = true;

            tempDonut.sprite.events.onInputDown.add(function () {
                _this4.donutDown(tempDonut);
            }, this);

            return tempDonut;
        }
    }, {
        key: 'donutDown',
        value: function donutDown(donut) {
            if (this.canMove) {
                this.activeDonut1 = donut;

                this.startPosX = (donut.sprite.x - this.donutWidth / 2) / this.donutWidth;
                this.startPosY = (donut.sprite.y - 120 - this.donutWidth / 2) / this.donutWidth;
            }
        }
    }, {
        key: 'checkMatch',
        value: function checkMatch() {
            var _this5 = this;

            var combinations = this.getMatches();

            if (combinations.length > 0) {
                this.time.events.add(300, function () {
                    _this5.destroyDonuts(combinations);
                });

                this.time.events.add(500, function () {
                    _this5.refreshMainMatrix();
                    _this5.fillMatrixByNewDonuts();
                });

                this.time.events.add(600, function () {
                    _this5.activeDonutsReset();
                    _this5.checkMatch();
                });
            } else {
                this.swapDonuts();

                this.game.time.events.add(500, function () {
                    _this5.activeDonutsReset();

                    _this5.canMove = true;
                });
            }
        }
    }, {
        key: 'activeDonutsReset',
        value: function activeDonutsReset() {
            this.activeDonut1 = null;
            this.activeDonut2 = null;
        }
    }, {
        key: 'getMatches',
        value: function getMatches() {
            var _this6 = this;

            var combinations = [];
            var groupOf3orMore = [];

            for (var i = 0; i < this.mainMatrix.length; i++) {
                var tempLine = this.mainMatrix[i];

                groupOf3orMore = [];

                for (var j = 0; j < tempLine.length; j++) {
                    if (tempLine[j] && tempLine[j + 1] && tempLine[j + 2]) {

                        if (tempLine[j].index === tempLine[j + 1].index && tempLine[j + 1].index === tempLine[j + 2].index) {
                            groupOf3orMore.push(tempLine[j], tempLine[j + 1], tempLine[j + 2]);

                            var tempIndex = tempLine[j].index;

                            j += 2;

                            if (j === tempLine.length - 1 && groupOf3orMore.length) {
                                combinations.push(groupOf3orMore);

                                groupOf3orMore = [];
                            } else {
                                for (var nextDonut = j + 1; nextDonut < tempLine.length; nextDonut++) {

                                    if (tempIndex === tempLine[nextDonut].index) {
                                        groupOf3orMore.push(tempLine[nextDonut]);

                                        j += 1;
                                    } else {
                                        combinations.push(groupOf3orMore);

                                        groupOf3orMore = [];

                                        break;
                                    }
                                }

                                if (groupOf3orMore.length) {
                                    combinations.push(groupOf3orMore);
                                    groupOf3orMore = [];
                                }
                            }
                        }
                    }
                }
            }

            var _loop = function _loop(_i) {
                var tempRaw = _this6.mainMatrix.map(function (value) {
                    return value[_i];
                });

                groupOf3orMore = [];

                for (var _j = 0; _j < tempRaw.length; _j++) {
                    if (tempRaw[_j] && tempRaw[_j + 1] && tempRaw[_j + 2]) {

                        if (tempRaw[_j].index === tempRaw[_j + 1].index && tempRaw[_j + 1].index === tempRaw[_j + 2].index) {
                            groupOf3orMore.push(tempRaw[_j], tempRaw[_j + 1], tempRaw[_j + 2]);

                            var _tempIndex = tempRaw[_j].index;

                            _j += 2;

                            if (_j === tempRaw.length - 1 && groupOf3orMore.length) {
                                combinations.push(groupOf3orMore);

                                groupOf3orMore = [];
                            } else {
                                for (var _nextDonut = _j + 1; _nextDonut < tempRaw.length; _nextDonut++) {
                                    if (_tempIndex === tempRaw[_nextDonut].index) {
                                        groupOf3orMore.push(tempRaw[_nextDonut]);

                                        _j += 1;
                                    } else {
                                        combinations.push(groupOf3orMore);

                                        groupOf3orMore = [];

                                        break;
                                    }
                                }

                                if (groupOf3orMore.length) {
                                    combinations.push(groupOf3orMore);

                                    groupOf3orMore = [];
                                }
                            }
                        }
                    }
                }
            };

            for (var _i = 0; _i < this.mainMatrix.length; _i++) {
                _loop(_i);
            }
            return combinations;
        }
    }, {
        key: 'update',
        value: function update() {
            var _this7 = this;

            if (this.activeDonut1 && !this.activeDonut2) {
                var hoverX = this.input.x;
                var hoverY = this.input.y - 120;

                var hoverPosX = Math.floor(hoverX / this.donutWidth);
                var hoverPosY = Math.floor(hoverY / this.donutHeight);

                var difX = hoverPosX - this.startPosX;
                var difY = hoverPosY - this.startPosY;

                if (!(hoverPosY > this.mainMatrix[0].length - 1 || hoverPosY < 0) && !(hoverPosX > this.mainMatrix.length - 1 || hoverPosX < 0)) {

                    if (Math.abs(difY) === 1 && difX === 0 || Math.abs(difX) === 1 && difY === 0) {

                        this.canMove = false;

                        this.activeDonut2 = this.mainMatrix[hoverPosX][hoverPosY];

                        this.swapDonuts();

                        this.time.events.add(500, function () {
                            _this7.checkMatch();
                        });
                    }
                }
            }

            if (this.timeExpired > this.timeToPlay) {
                this.state.start('gameOverState');
            }
        }
    }, {
        key: 'swapDonuts',
        value: function swapDonuts() {
            if (this.activeDonut1 && this.activeDonut2) {
                var donut1Pos = {
                    x: (this.activeDonut1.sprite.x - this.donutWidth / 2) / this.donutWidth,
                    y: (this.activeDonut1.sprite.y - 120 - this.donutWidth / 2) / this.donutWidth
                };
                var donut2Pos = {
                    x: (this.activeDonut2.sprite.x - this.donutWidth / 2) / this.donutWidth,
                    y: (this.activeDonut2.sprite.y - 120 - this.donutWidth / 2) / this.donutWidth
                };

                if (!window['music'].mute) {
                    this.selectSound.play();
                }

                this.mainMatrix[donut1Pos.x][donut1Pos.y] = this.activeDonut2;
                this.mainMatrix[donut2Pos.x][donut2Pos.y] = this.activeDonut1;

                this.add.tween(this.activeDonut1.sprite).to({
                    x: donut2Pos.x * this.donutWidth + this.donutWidth / 2,
                    y: donut2Pos.y * this.donutHeight + this.donutHeight / 2 + 120
                }, 200, Phaser.Easing.Linear.In, true);

                this.add.tween(this.activeDonut2.sprite).to({
                    x: donut1Pos.x * this.donutWidth + this.donutWidth / 2,
                    y: donut1Pos.y * this.donutHeight + this.donutHeight / 2 + 120
                }, 200, Phaser.Easing.Linear.In, true);
            }
        }
    }, {
        key: 'destroyDonuts',
        value: function destroyDonuts(matches) {
            for (var i = 0; i < matches.length; i++) {
                for (var j = 0; j < matches[i].length; j++) {
                    window['score'] += 10;
                    this.scoreText.text = window['score'];

                    if (!window['music'].mute) {
                        this.destroySound.play();
                    }

                    var donut = matches[i][j];

                    var donutPos = this.getDonutsPos(donut);

                    matches[i][j].sprite.destroy();
                    if (donutPos.i !== -1 && donutPos.j !== -1) {
                        this.mainMatrix[donutPos.i][donutPos.j] = null;
                    }
                }
            }
        }
    }, {
        key: 'getDonutsPos',
        value: function getDonutsPos(donut) {
            var position = {
                i: -1,
                j: -1
            };

            for (var i = 0; i < this.mainMatrix.length; i++) {
                for (var j = 0; j < this.mainMatrix[i].length; j++) {
                    if (donut === this.mainMatrix[i][j]) {
                        position.i = i;
                        position.j = j;

                        break;
                    }
                }
            }
            return position;
        }
    }, {
        key: 'refreshMainMatrix',
        value: function refreshMainMatrix() {
            for (var i = 0; i < this.mainMatrix.length; i++) {
                for (var j = this.mainMatrix[i].length - 1; j > 0; j--) {
                    if (this.mainMatrix[i][j] == null && this.mainMatrix[i][j - 1] !== null) {
                        var tempDonut = new _DonutConstructor2.default(this.donutHeight, this.donutWidth, this.mainMatrix[i][j - 1].index, this.mainMatrix[i][j - 1].sprite);

                        this.mainMatrix[i][j] = tempDonut;
                        this.mainMatrix[i][j - 1] = null;

                        this.add.tween(tempDonut.sprite).to({ y: this.donutHeight * j + this.donutHeight / 2 + 120 }, 200, Phaser.Easing.Linear.In, true);

                        j = this.mainMatrix[i].length;
                    }
                }
            }
        }
    }, {
        key: 'fillMatrixByNewDonuts',
        value: function fillMatrixByNewDonuts() {
            for (var i = 0; i < this.mainMatrix.length; i++) {
                for (var j = 0; j < this.mainMatrix.length; j++) {
                    if (!this.mainMatrix[i][j]) {
                        this.mainMatrix[i][j] = this.addDonut(i, j);
                    }
                }
            }
        }
    }]);

    return PlayState;
}(Phaser.State);

exports.default = PlayState;

},{"../objects/DonutConstructor":2,"../objects/chechMusic":4,"../objects/createCustomButton":5,"../objects/createCustomSprite":6}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Preloader = function (_Phaser$State) {
    _inherits(Preloader, _Phaser$State);

    function Preloader() {
        _classCallCheck(this, Preloader);

        return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
    }

    _createClass(Preloader, [{
        key: 'preload',
        value: function preload() {
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
            this.load.images(['red-01', 'blue-02', 'green-03', 'lightBlue-04', 'yellow-05', 'pink-06'], ['../assets/images/game/gem-01.png', '../assets/images/game/gem-02.png', '../assets/images/game/gem-03.png', '../assets/images/game/gem-04.png', '../assets/images/game/gem-05.png', '../assets/images/game/gem-06.png']);
            this.load.image('returnButton', '../assets/images/btn-return.png');
            this.load.image('donutRed', '../assets/images/game/gem-01.png');
            this.load.image('donutBlue', '../assets/images/game/gem-02.png');
            this.load.image('returnToMainMenu', '../assets/images/btn-mainMenu.png');
        }
    }, {
        key: 'create',
        value: function create() {
            //creates music for whole game
            window['music'] = this.add.audio('backgroundMusic');
            window['music'].loop = true;

            window['music'].play();

            this.state.start('mainMenu');
        }
    }]);

    return Preloader;
}(Phaser.State);

exports.default = Preloader;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _createCustomButton = require('../objects/createCustomButton');

var _chechMusic = require('../objects/chechMusic');

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TutorialState = function (_Phaser$State) {
    _inherits(TutorialState, _Phaser$State);

    function TutorialState() {
        _classCallCheck(this, TutorialState);

        return _possibleConstructorReturn(this, (TutorialState.__proto__ || Object.getPrototypeOf(TutorialState)).apply(this, arguments));
    }

    _createClass(TutorialState, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.add.sprite(0, 0, 'backgroundImage');

            var soundButton = (0, _createCustomButton.createCustomButton)(this, 10, 10, 'soundButton', 80, 80, function () {
                if (window['music'].mute) {
                    window['music'].mute = false;

                    soundButton.tint = 0xFFFFFF;
                } else {
                    window['music'].mute = true;

                    soundButton.tint = 0xff0000;
                }
            });

            (0, _chechMusic.checkMusic)(soundButton);

            var returnBtn = (0, _createCustomButton.createCustomButton)(this, this.world.centerX + 110, this.world.centerY + 350, 'returnButton', 230, 150, function () {
                _this2.state.start('mainMenu');
            });

            returnBtn.anchor = {
                x: 1,
                y: 1
            };

            var tutorialText1 = this.add.text(this.world.centerX + 300, this.world.centerY - 80, '          How to play \nYou have to make a horizontal or vertical line of 3 or more same donuts', { fontSize: '48px', fill: 'violet', font: "Fredoka One", wordWrap: true, wordWrapWidth: 650 });

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

            var tutorialText2 = this.add.text(this.world.centerX + 270, this.world.centerY + 208, 'You have 30 seconds so get as much score as you can.', { font: "50px Fredoka One", fill: 'violet', wordWrap: true, wordWrapWidth: 600 });

            tutorialText2.anchor = {
                x: 1,
                y: 1
            };
        }
    }]);

    return TutorialState;
}(Phaser.State);

exports.default = TutorialState;

},{"../objects/chechMusic":4,"../objects/createCustomButton":5}]},{},[1])
//# sourceMappingURL=game.js.map
