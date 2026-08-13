import Enemy from "../entities/Enemy.js";
import HealthComponent from "../components/HealthComponent.js";
import SpriteRenderer from "../components/SpriteRenderer.js";
import Rigidbody from "../physics/Rigidbody.js";
import AttackComponent from "../components/AttackComponent.js";
import AIComponent from "../components/AIComponent.js";
export default class EnemyPrefab {

    static create(x = 0, y = 0) {

        const enemy = new Enemy("Slime");

        enemy.transform.position.set(x, y);
        enemy.transform.scale.set(0.6, 0.6);
        enemy.addComponent(
            new SpriteRenderer("slime")
        );

        enemy.addComponent(
            new Rigidbody(64, 64)
        );

        enemy.addComponent(
            new AIComponent()
        );

        enemy.addComponent(
            new HealthComponent(50)
        );

        enemy.addComponent(
            new AttackComponent(
                10,     // damage
                50,     // attack range
                1.0     // attack every second
            )
        );



        return enemy;

    }

}