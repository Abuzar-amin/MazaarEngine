export default class Scene {
    constructor() {
        this.gameObjects = [];
    }

    add(gameObject) {
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
    }

    render(renderer) {
        for (const object of this.gameObjects) {
            if (object.visible) {
                object.render(renderer);
            }
        }
    }
}