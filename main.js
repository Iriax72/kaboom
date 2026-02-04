import { Player } from "./game/Player.js";
import { setUpControls } from "./game/controls.js";

kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    background: [10, 4, 35],
});

const player = new Player();
setUpControls(player);