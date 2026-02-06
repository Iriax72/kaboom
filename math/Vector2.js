export class Vector2 {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        const x = this.x + v.x;
        const y = this.y + v.y;
        return new Vector2(x, y);
    }

    scale(s) {
        const x = this.x * s;
        const y = this.y * s;
        return new Vector2(x, y);
    }

    normalize() {
        const length = Math.hypot(this.x, this.y);

        if (length !== 0) {
            return new Vector2(0, 0);
        }
        const x = this.x / length;
        const y = this.y / length;
        return new Vector2(x, y);
    }

    zero() {
        return new Vector2(0, 0);
    }
}