import PlayerPrefab from "../src/prefabs/PlayerPrefab.js";
import WorldLoader from "../src/world/WorldLoader.js";
import KeyPrefab from "../src/prefabs/KeyPrefab.js";
import EnemyPrefab from "../src/prefabs/EnemyPrefab.js";
import ChestPrefab from "../src/prefabs/ChestPrefab.js";
import ExitPrefab from "../src/prefabs/ExitPrefab.js";

export default async function createDemoScene(engine) {

    engine.scene.world =
        await WorldLoader.load(
            "./assets/maps/demo.json"
        );


 // =========================
// PLAYER
// =========================

const player =
    PlayerPrefab.create(
        55,
        90
    );

engine.scene.add(player);
engine.scene.player = player;


// =========================
// SLIMES
// =========================

engine.scene.add(
    EnemyPrefab.create(
        256,
        256,
        "slime"
    )
);

engine.scene.add(
    EnemyPrefab.create(
        448,
        256,
        "slime"
    )
);


// =========================
// GOBLINS
// =========================

engine.scene.add(
    EnemyPrefab.create(
        320,
        640,
        "goblin"
    )
);

engine.scene.add(
    EnemyPrefab.create(
        1024,
        576,
        "goblin"
    )
);


// KEY — EXACTLY BETWEEN THEM

engine.scene.add(
    KeyPrefab.create(
        448,
        640
    )
);


// =========================
// CHEST ROOM
// =========================

engine.scene.add(
    ChestPrefab.create(
        1152,
        576
    )
);


// =========================
// MINOTAUR TUNNEL
// =========================

engine.scene.add(
    EnemyPrefab.create(
        1024,
        960,
        "minotaur"
    )
);


// =========================
// PORTAL
// =========================

engine.scene.add(
    ExitPrefab.create(
        1024,
        1152
    )
);

engine.camera.follow(player);
}