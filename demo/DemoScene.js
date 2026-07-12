import PrefabManager from "../src/prefabs/PrefabManager.js";
import World from "../src/world/World.js";
export default function createDemoScene(engine) {

    engine.scene.world = new World(
        20,
        15,
        64
    );

    const player =
        PrefabManager.create(
            "player",
            300,
            200
        );

    engine.scene.add(player);

    engine.camera.follow(player);

    engine.scene.add(

        PrefabManager.create(
            "wall",
            700,
            200
        )

    );

}