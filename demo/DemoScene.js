import World from "../src/world/World.js";
import PlayerPrefab from "../src/prefabs/PlayerPrefab.js";
import WorldLoader from "../src/world/WorldLoader.js";
import KeyPrefab from "../src/prefabs/KeyPrefab.js";
import EnemyPrefab from "../src/prefabs/EnemyPrefab.js";
import ChestPrefab from "../src/prefabs/ChestPrefab.js";
import ExitPrefab from "../src/prefabs/ExitPrefab.js";
export default async function createDemoScene(engine) {

    engine.scene.world =
        await WorldLoader.load(
            "../assets/maps/demo.json"
        );

    const player =
        PlayerPrefab.create(
            300,
            200
        );

    engine.scene.add(player);
    engine.scene.player = player;

    engine.scene.add(
        EnemyPrefab.create(600, 200)
    );

    engine.scene.add(
         EnemyPrefab.create(700, 300)
    );

    engine.scene.add(
        EnemyPrefab.create(500, 450)
    );
    engine.scene.add(
        KeyPrefab.create(450, 250)
    );
    engine.scene.add(
        ChestPrefab.create(700, 250)
    );
    engine.scene.add(
        ExitPrefab.create(850, 450)
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