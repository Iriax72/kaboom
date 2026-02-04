export class Player {
    constructor () {
        this.entity = add([
            rect(30, 30),
            pos(150, 150),
            color(200, 10, 30)
        ])

        this.speed = 20;
    }

    move (dir) {
        this.entity.move(dir.scale(this.speed * dt()))
    }
}