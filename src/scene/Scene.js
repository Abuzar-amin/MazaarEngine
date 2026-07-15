import World from "../world/World.js";
import PhysicsSystem from "../physics/PhysicsSystem.js";
export default class Scene {
    constructor() {
        this.gameObjects = [];
        this.world = null;
    }

    add(gameObject) {

        gameObject.scene = this;

        this.gameObjects.push(gameObject);

    }

    remove(gameObject) {
        this.gameObjects = this.gameObjects.filter(
            object => object !== gameObject
        );
    }

    update() {

        for (const object of this.gameObjects) {

            if (object.active) {
                object.update();
            }

        }

        PhysicsSystem.update(this);

    }

    render(renderer) {

        if (this.world) {

            this.world.render(renderer);

        }

        for (const object of this.gameObjects) {

            if (object.visible) {

                object.render(renderer);

            }

        }

    }
}