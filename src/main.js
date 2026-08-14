import Engine from "./core/Engine.js";
import AssetManager from "../assets/AssetManager.js";
import createDemoScene from "../demo/DemoScene.js";
const victoryButtons =
    document.getElementById("victory-buttons");

const hireButton =
    document.getElementById("hire-button");

const sourceButton =
    document.getElementById("source-button");

hireButton.addEventListener("click", () => {

    window.open(
        "https://www.linkedin.com/in/abuzar-amin-4945b4254",
        "_blank"
    );

});

sourceButton.addEventListener("click", () => {

    window.open(
        "https://github.com/Abuzar-amin",
        "_blank"
    );

});
async function start() {

    await AssetManager.loadImage(
    "grass",
    "../assets/sprites/grass.png"
    );
    await AssetManager.loadImage(
        "dungeon-floor",
        "../assets/sprites/dungeon_floor.png"
    );

    await AssetManager.loadImage(
        "player",
        "../assets/sprites/player.png"
    );
    await AssetManager.loadImage(
        "playerWalk",
        "../assets/sprites/player-walk.png"
    );
    await AssetManager.loadImage(
        "slime",
        "../assets/sprites/enemy.png"
    );
    await AssetManager.loadImage(
        "slimeWalk",
        "../assets/sprites/slime-walk.png"
    );
    await AssetManager.loadImage(
        "potion",
        "../assets/sprites/items/potion.png"
    );
    await AssetManager.loadImage(
        "goblin",
        "../assets/sprites/goblin.png"
    );

    await AssetManager.loadImage(
        "minotaur",
        "../assets/sprites/minotaur.png"
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
    engine.sceneFactory = createDemoScene;
    await engine.sceneFactory(engine);
    //await createDemoScene(engine);


    engine.start();

}

start();