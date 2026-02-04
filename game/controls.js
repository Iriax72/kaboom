export function setUpControls (player) {
    loop(() => {
        // movement
        let dir = vec2(0, 0); 

        if (isKeyDown('right')) dir.x += 1;
        if (isKeyDown('left')) dir.x -= 1;
        if (isKeyDown('down')) dir.y += 1;
        if (isKeyDown('up')) dir.y -= 1;

        if (dir.length === 0) return

        dir = dir.unit();

        player.move(dir);
    })
}