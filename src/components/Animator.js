import Component from "./Component.js";
import Time from "../core/Time.js";

export default class Animator extends Component {

    constructor(
        frameWidth,
        frameHeight,
        frameCount,
        fps = 8
    ) {

        super();

        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;

        this.frameCount = frameCount;

        this.currentFrame = 0;

        this.fps = fps;

        this.timer = 0;

        this.playing = false;

    }

    play() {

        this.playing = true;

    }

    stop() {

        this.playing = false;

        this.currentFrame = 0;

        this.timer = 0;

        const sprite =
            this.gameObject.components.find(
                c => c.constructor.name === "SpriteRenderer"
            );

        if (sprite) {

            sprite.sourceX = 0;

        }

    }

    update() {

        if (!this.playing) return;

        this.timer += Time.deltaTime;

        if (this.timer >= 1 / this.fps) {

            this.timer = 0;

            this.currentFrame++;

            if (this.currentFrame >= this.frameCount) {

                this.currentFrame = 0;

            }

            const sprite =
                this.gameObject.components.find(
                    c => c.constructor.name === "SpriteRenderer"
                );

            if (sprite) {

                sprite.sourceX =
                    this.currentFrame *
                    this.frameWidth;

            }

        }

    }

}