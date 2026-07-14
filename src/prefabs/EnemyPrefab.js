import Enemy from "../entities/Enemy.js";
import HealthComponent from "../components/HealthComponent.js";
import SpriteRenderer from "../components/SpriteRenderer.js";
import Rigidbody from "../physics/Rigidbody.js";
import Animator from "../components/Animator.js";

export default class EnemyPrefab {

    static create(x = 0, y = 0) {

        const enemy = new Enemy("Slime");

        enemy.transform.position.set(x, y);

        enemy.addComponent(
            new SpriteRenderer("player")
        );

        enemy.addComponent(
            new Rigidbody(64, 64)
        );

        enemy.addComponent(
            new HealthComponent(50)
        );

        enemy.addComponent(
            new Animator(64, 64, 4, 8)
        );

        return enemy;

    }

}