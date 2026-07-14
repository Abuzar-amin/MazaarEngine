import PrefabManager from "../src/prefabs/PrefabManager.js";
import World from "../src/world/World.js";
import WorldLoader from "../src/world/WorldLoader.js";
import EnemyPrefab from "../src/prefabs/EnemyPrefab.js";
export default async function createDemoScene(engine) {

    engine.scene.world =
        await WorldLoader.load(
            "../assets/maps/demo.json"
        );

    const player =
        PrefabManager.create(
            "player",
            300,
            200
        );

    engine.scene.add(player);

    engine.scene.add(
        EnemyPrefab.create(600, 200)
    );

        engine.scene.add(
            EnemyPrefab.create(700, 300)
        );

        engine.scene.add(
            EnemyPrefab.create(500, 450)
        );

    engine.camera.follow(player);

    /*engine.scene.add(

        PrefabManager.create(
            "wall",
            700,
            200
        )

    );*/

}