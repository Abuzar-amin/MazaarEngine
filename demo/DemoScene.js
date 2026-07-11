import PlayerPrefab from "../src/prefabs/PlayerPrefab.js";
import WallPrefab from "../src/prefabs/WallPrefab.js";

export default function createDemoScene(engine) {

    const player = PlayerPrefab.create(300, 200);

    engine.scene.add(player);

    engine.camera.follow(player);

    engine.scene.add(
        WallPrefab.create(700, 200)
    );

}