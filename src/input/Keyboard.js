export default class Keyboard {

    static keys = {};

    static initialize() {

        window.addEventListener("keydown", (event) => {
            this.keys[event.key.toLowerCase()] = true;
        });

        window.addEventListener("keyup", (event) => {
            this.keys[event.key.toLowerCase()] = false;
        });

    }

    static isKeyDown(key) {

        return this.keys[key.toLowerCase()] || false;

    }

}