import * as PIXI from 'https://jsdelivr.net/npm/pixi.js@8/dist/pixi.mjs';
import { Controls } from '../Controls.js'
import { Vector2 } from '../math/Vector2.js';

export class Player extends PIXI.Sprite {
    constructor() {
        const texture = PIXI.Texture.from("assets/images/player.png");
        super(texture);

        this.anchor.set(0.5);
        this.position.set(300, 300);

        this.speed = 4;
    }

    update(delta) {
        let dir = new Vector2();
        if (Controls.isKeyPressed('ArrowUp') || Controls.isKeyPressed('w')) {
            dir.y -= 1;
        }
        if (Controls.isKeyPressed('ArrowDown') || Controls.isKeyPressed('s')) {
            dir.y += 1;
        }
        if (Controls.isKeyPressed('ArrowLeft') || isKeyPressed('a')) {
            dir.x -= 1;
        }
        if (Controls.isKeyPressed('ArrowRight') || Controls.isKeyPressed('d')) {
            dir.x += 1;
        }
        dir = dir.normalize();
        const velocity = dir.scale(this.speed * delta);
        this.position = this.position.add(velocity);
    }
}