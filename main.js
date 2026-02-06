import * as PIXI from "https://cdn.jsdelivr.net/npm/pixi.js@8/dist/pixi.mjs";
import { GameScene } from "./scenes/GameScene.js";

const app = new PIXI.Application({
    width: 800,
    height: 450,
    backgroundColor: 0x1040b5,
})

document.body.appendChild(app.view)

const gameScene = new GameScene(app);
app.stage.addChild(gameScene);