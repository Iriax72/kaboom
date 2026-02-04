import { Player } from "./game/Player.js";
import { setUpControls } from "./game/controls.js";

alert("loop: " + typeof loop);
alert("vec2: " + typeof vec2);
alert("keyIsDown" + typeof KeyIsDown);
alert("unit" + typeof unit);

kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    background: [10, 4, 35],
});

const player = new Player();
setUpControls(player);