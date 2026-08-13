export default class Time {

    static deltaTime = 0;

    static lastTime = null;

    static elapsedTime = 0;

    static frameCount = 0;

    static update(currentTime) {

        if (this.lastTime === null) {

            this.lastTime = currentTime;

            return;

        }

        this.deltaTime =
            (currentTime - this.lastTime) / 1000;

        this.lastTime = currentTime;

        this.elapsedTime += this.deltaTime;

        this.frameCount++;

    }

}