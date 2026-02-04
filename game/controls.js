export function setUpControls (player) {
    loop(() => {

        let dir = vec2(
            keyIsDown('right') - keyIsDown('left'),
            keyIsDown('down') - keyIsDown('up')
        );

        if (dir.length === 0) return

        dir = dir.unit();

        player.move(dir);
    })
}