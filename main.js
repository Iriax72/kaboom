import { Player } from "./game/Player.js";
import { setUpControls } from "./game/controls.js";

kaboom({
    width: window.innerWidth,
    height: window.innerHeight,
    background: [10, 4, 35],
});

alert("loop: " + typeof loop + "\nvec2: " + typeof vec2 + "\nkeyIsDown: " + typeof keyIsDown + "\nunit: " + typeof unit);

const player = new Player();
setUpControls(player);