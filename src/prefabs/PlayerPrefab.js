import GameObject from "../scene/GameObject.js";

import SpriteRenderer from "../components/SpriteRenderer.js";
import PlayerController from "../components/PlayerController.js";
import Animator from "../components/Animator.js";

import Rigidbody from "../physics/Rigidbody.js";
import BoxCollider from "../physics/BoxCollider.js";

export default class PlayerPrefab {

    static create(x = 0, y = 0) {

        const player = new GameObject("Player");

        player.transform.position.set(x, y);

        player.addComponent(
            new SpriteRenderer("player")
        );

        player.addComponent(
            new Rigidbody(64, 64)
        );

       /* player.addComponent(
            new BoxCollider(64, 64)
        );*/

        player.addComponent(
            new PlayerController()
        );

        player.addComponent(
            new Animator(64, 64, 4, 8)
        );

        return player;

    }

}