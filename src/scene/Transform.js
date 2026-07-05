import Vector2 from "../math/Vector2.js";

export default class Transform {
    constructor() {
        this.position = new Vector2(0, 0);
        this.rotation = 0;
        this.scale = new Vector2(1, 1);
    }
}