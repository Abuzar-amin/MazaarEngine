import Player from "../entities/Player.js";
import SpriteRenderer from "../components/SpriteRenderer.js";
import PlayerController from "../components/PlayerController.js";
import Animator from "../components/Animator.js";
import HealthComponent from "../components/HealthComponent.js";
import Rigidbody from "../physics/Rigidbody.js";
import AttackComponent from "../components/AttackComponent.js";

export default class PlayerPrefab {

    static create(x = 0, y = 0) {

        const player = new Player();

        player.transform.position.set(x, y);
        player.transform.scale.set(0.13, 0.13);

        player.addComponent(
            new SpriteRenderer(
                "playerWalk",
                0,
                0,
                480,
                768,
                0.8,
                -35.84
            )
        );

        player.addComponent(
            new Animator(
                480,
                768,
                4,
                8
            )
        );

        player.addComponent(
            new Rigidbody(64, 64)
        );

        player.addComponent(
            new HealthComponent(100)
        );

        player.addComponent(
            new AttackComponent(25, 120)
        );

        player.addComponent(
            new PlayerController()
        );

        return player;

    }

}