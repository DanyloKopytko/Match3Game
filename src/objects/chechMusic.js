export function checkMusic(soundButton) {
    (window['music'].mute) ? soundButton.tint = 0xff0000 : soundButton.tint = 0xFFFFFF;
}
