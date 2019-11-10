export function animate(game, item, start, end, stopNumber = 0) {
    if (stopNumber >= start - end) {
        return 0;
    }

    setTimeout(() => {
        item.x = start - stopNumber;

        stopNumber += 3;

        animate(game, item, start, end, stopNumber);
    }, 1);
}
