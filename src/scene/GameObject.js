import Transform from "./Transform.js";

export default class GameObject {

    constructor(name = "GameObject") {

        this.name = name;

        this.transform = new Transform();

        this.components = [];

        this.active = true;
        this.visible = true;
    }

    addComponent(component) {

        component.gameObject = this;

        this.components.push(component);

        component.start();

        return component;
    }

    getComponent(componentType) {

    for (const component of this.components) {

        if (component instanceof componentType) {
            return component;
        }

    }

    return null;

    }
    removeComponent(componentType) {

    this.components = this.components.filter(
        component => !(component instanceof componentType)
    );

}

    update() {

        for (const component of this.components) {
            component.update();
        }

    }

    render(renderer) {

        for (const component of this.components) {
            component.render(renderer);
        }

    }

}