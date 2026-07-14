import Vector2 from "../math/Vector2.js";

export default class Camera {

    constructor(width = 1280, height = 720) {

        this.position = new Vector2();

        this.width = width;
        this.height = height;

        this.zoom = 1;

        this.target = null;

    }

    follow(gameObject) {

        this.target = gameObject;

    }

    update() {

        if (!this.target) return;

        const targetX =
            this.target.transform.position.x -
            this.width / 2;

        const targetY =
            this.target.transform.position.y -
            this.height / 2;

        this.position.x +=
            (targetX - this.position.x) * 0.1;

        this.position.y +=
            (targetY - this.position.y) * 0.1;

    }

}