export class Controls {
    static keys = {};

    static initialize() {
        window.addEventListener('load', () => {
            window.addEventListener('keydown', (e) => {
                this.keys[e.key] = true;
            });
            window.addEventListener('keyup', (e) => {
                this.keys[e.key] = false;
            });
        });
    }

    static isKeyPressed(key) {
        return !!this.keys[key];
    }
}
