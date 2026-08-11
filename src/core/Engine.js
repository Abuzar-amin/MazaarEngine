import Scene from "../scene/Scene.js";
import GameLoop from "./GameLoop.js";
import Renderer from "../graphics/Renderer.js";
import Time from "./Time.js";
import Keyboard from "../input/Keyboard.js";
import Camera from "../graphics/Camera.js";

export default class Engine {
    constructor() {

        this.renderer = new Renderer();
        this.camera = new Camera();
        this.renderer.camera = this.camera;
        this.gameLoop = new GameLoop(this);
        this.scene = new Scene();
        this.scene.engine =  this;
        this.sceneFactory = null;

        Keyboard.initialize();

        this.running = false;
        this.gameOver = false;

    }

    start() {
        if (this.running) return;

        this.running = true;
        this.gameLoop.start();
    }

    update() {

        if (this.gameOver) {

            return;

        }

        this.camera.update();

        this.scene.update();

    }
    async restart() {

        this.gameOver = false;

        this.scene = new Scene();

        this.scene.engine = this;

        await this.sceneFactory(this);

    }

    render() {
        this.renderer.render();
        this.scene.render(this.renderer);
    }
}