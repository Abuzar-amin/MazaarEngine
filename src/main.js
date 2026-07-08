import Animator from "./components/Animator.js";
import Engine from "./core/Engine.js";
import GameObject from "./scene/GameObject.js";

import PlayerController from "./components/PlayerController.js";
import SpriteRenderer from "./components/SpriteRenderer.js";

import AssetManager from "./loaders/AssetManager.js";
import Rigidbody from "./physics/Rigidbody.js";

async function start() {

    await AssetManager.loadImage(
        "player",
        "../assets/images/player.png"
    );

    const engine = new Engine();

    const player = new GameObject("Player");

    player.transform.position.set(300, 200);

    player.addComponent(
        new SpriteRenderer("player")
    );

    player.addComponent(
        new Rigidbody()
    );

    player.addComponent(
        new PlayerController()
    );

    player.addComponent(
        new Animator(64, 64, 4, 8)
    );

    engine.scene.add(player);

    engine.camera.follow(player);

    engine.start();

}

start();