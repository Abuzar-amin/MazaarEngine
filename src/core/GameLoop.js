export default class GameLoop {
    constructor(engine) {
        this.engine = engine;
        this.animationFrameId = null;
    }

    start() {
        const loop = () => {
            this.engine.update();
            this.engine.render();

            this.animationFrameId = requestAnimationFrame(loop);
        };

        this.animationFrameId = requestAnimationFrame(loop);
    }
}