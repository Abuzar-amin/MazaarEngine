import Engine from "./core/Engine.js";
import AssetManager from "../assets/AssetManager.js";
import createDemoScene from "../demo/DemoScene.js";

async function start() {

    await AssetManager.loadImage(
    "grass",
    "../assets/images/grass.png"
    );

    await AssetManager.loadImage(
        "player",
        "../assets/images/player.png"
    );

    await AssetManager.loadImage(
        "stone",
        "../assets/images/stone.png"
    );

    const engine = new Engine();

    createDemoScene(engine);

    engine.start();

}

start();