export default class Time {

    static deltaTime = 0;

    static lastTime = 0;

    static elapsedTime = 0;

    static frameCount = 0;

    static update(currentTime) {

        this.deltaTime = (currentTime - this.lastTime) / 1000;

        this.lastTime = currentTime;

        this.elapsedTime += this.deltaTime;

        this.frameCount++;

    }

}