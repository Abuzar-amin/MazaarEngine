import Transform from "./Transform.js";

export default class GameObject {
    constructor(name = "GameObject") {
        this.name = name;
        this.transform = new Transform();

        this.active = true;
        this.visible = true;
    }

    update() {

    }

    render(renderer) {

    }
}