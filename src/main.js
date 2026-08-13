import Engine from "./core/Engine.js";
import AssetManager from "../assets/AssetManager.js";
import createDemoScene from "../demo/DemoScene.js";

async function start() {

    await AssetManager.loadImage(
    "grass",
    "../assets/sprites/grass.png"
    );

    await AssetManager.loadImage(
        "player",
        "../assets/sprites/player.png"
    );
        await AssetManager.loadImage(
            "slime",
            "../assets/sprites/enemy.png"
        );
    await AssetManager.loadImage(
        "stone",
        "../assets/sprites/stone.png"
    );

    await AssetManager.loadImage(
        "key",
        "../assets/sprites/items/key.png"
    );
    await AssetManager.loadImage(
        "chest",
        "../assets/sprites/items/chest.png"
    );
    await AssetManager.loadImage(
        "chest-open",
        "../assets/sprites/items/chest-open.png"
    );
    await AssetManager.loadImage(
        "exit",
        "../assets/sprites/exit.png"
    );
    const engine = new Engine();
    window.engine = engine;
    engine.sceneFactory = createDemoScene;
    await engine.sceneFactory(engine);
    //await createDemoScene(engine);


    engine.start();

}

start();