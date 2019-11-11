export function createParticles(donut, game) {
    let particleColor = `${donut.index}-particle`;
    let particles = [];

    for (let i = 1; i < 3; i++) {
        let particle = game.add.sprite(donut.sprite.position.x, donut.sprite.position.y, particleColor);
        let particle2= game.add.sprite(donut.sprite.position.x, donut.sprite.position.y, particleColor);

        particle.width = 10;
        particle.height = 10;
        particle2.width = 10;
        particle2.height = 10;

        game.add.tween(particle).to({
            x: donut.sprite.position.x + i * 50,
            y: donut.sprite.position.y + i * 50
        }, 400, Phaser.Easing.Linear.In, true);

        game.add.tween(particle2).to({
            x: donut.sprite.position.x - i * 50,
            y: donut.sprite.position.y - i * 50
        }, 400, Phaser.Easing.Linear.In, true);


        particles.push(particle, particle2);
    }

    setTimeout(() => {
        for (let i = 0; i < particles.length; i++) {
            particles[i].destroy();
        }
    }, 200);
}
