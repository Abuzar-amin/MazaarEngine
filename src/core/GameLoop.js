import Time from "./Time.js";

export default class GameLoop {

    constructor(engine) {

        this.engine = engine;

        this.animationFrameId = null;

    }

    start() {

        const loop = (currentTime) => {

            Time.update(currentTime);

            this.engine.update();

            this.engine.render();

            this.animationFrameId = requestAnimationFrame(loop);

        };

        requestAnimationFrame(loop);

    }

}