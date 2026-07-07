import Vector2 from "../math/Vector2.js";

export default class Camera {

    constructor() {

        this.position = new Vector2();

        this.zoom = 1;

        this.target = null;

    }

    follow(gameObject) {

        this.target = gameObject;

    }

    update() {

    if (!this.target) return;

    const targetX =
        this.target.transform.position.x - 640;

    const targetY =
        this.target.transform.position.y - 360;

    this.position.x +=
        (targetX - this.position.x) * 0.1;

    this.position.y +=
        (targetY - this.position.y) * 0.1;

}

}