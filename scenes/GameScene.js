import * as PIXI from 'https://cdn.jsdelivr.net/npm/pixi.js@8/dist/pixi.mjs';
import { Player } from '../entities/Player';

export class GameScene extends PIXI.Container {
    constructor(app) {
        super();
        this.app = app;

        this.player = new Player();
        this.addChild(this.player);

        app.ticker.add((delta) => {
            this.player.update(delta);
        })
    }
}