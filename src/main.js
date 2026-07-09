import Animator from "./components/Animator.js";
import Engine from "./core/Engine.js";
import GameObject from "./scene/GameObject.js";
import BoxCollider from "./physics/BoxCollider.js";
import PlayerController from "./components/PlayerController.js";
import SpriteRenderer from "./components/SpriteRenderer.js";
import RectangleRenderer from "./components/RectangleRenderer.js";
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
        new BoxCollider(64, 64)
    );

    player.addComponent(
        new PlayerController()
    );

    player.addComponent(
        new Animator(64, 64, 4, 8)
    );

    engine.scene.add(player);

    engine.camera.follow(player);


    const wall = new GameObject("Wall");

    wall.transform.position.set(700,200);

    wall.addComponent(
        new RectangleRenderer(
            200,
            200,
            "red"
        )
    );

    wall.addComponent(
        new BoxCollider(
            200,
            200
        )
    );

    engine.scene.add(wall);

    engine.start();

}

start();