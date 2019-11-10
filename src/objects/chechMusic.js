export function checkMusic(soundButton) {
    if (window['music'].mute) {
        soundButton.tint = 0xff0000;
    } else {
        soundButton.tint = 0xFFFFFF;
    }
}
