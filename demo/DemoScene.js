import GameObject from "../src/scene/GameObject.js";

import SpriteRenderer from "../src/components/SpriteRenderer.js";
import PlayerController from "../src/components/PlayerController.js";
import Rigidbody from "../src/physics/Rigidbody.js";
import BoxCollider from "../src/physics/BoxCollider.js";
import Animator from "../src/components/Animator.js";

export default function createDemoScene(engine) {

    const player = new GameObject("Player");

    player.transform.position.set(300, 200);

    player.addComponent(new SpriteRenderer("player"));
    player.addComponent(new Rigidbody());
    player.addComponent(new BoxCollider(64, 64));
    player.addComponent(new PlayerController());
    player.addComponent(new Animator(64, 64, 4, 8));

    engine.scene.add(player);

    engine.camera.follow(player);

}