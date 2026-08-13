export default class Keyboard {

    static keys = {};
    static pressedKeys = {};

    static initialize() {

        window.addEventListener("keydown", (event) => {

            const key = event.key.toLowerCase();

            this.keys[key] = true;

            if (!event.repeat) {
                this.pressedKeys[key] = true;
            }

        });

        window.addEventListener("keyup", (event) => {

            this.keys[event.key.toLowerCase()] = false;

        });

    }

    static isKeyDown(key) {

        return this.keys[key.toLowerCase()] || false;

    }

    static isKeyPressed(key) {

        const normalizedKey = key.toLowerCase();

        if (!this.pressedKeys[normalizedKey]) {
            return false;
        }

        this.pressedKeys[normalizedKey] = false;

        return true;

    }

}