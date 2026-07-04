import Scene from "../scene/Scene.js";
import GameLoop from "./GameLoop.js";
import Renderer from "../graphics/Renderer.js";

export default class Engine {
    constructor() {
        this.renderer = new Renderer();
        this.gameLoop = new GameLoop(this);
        this.scene = new Scene();
        this.running = false;
    }

    start() {
        if (this.running) return;

        this.running = true;
        this.gameLoop.start();
    }

    update() {
        this.scene.update();
    }

    render() {
        this.renderer.render();
        this.scene.render(this.renderer);
    }
}