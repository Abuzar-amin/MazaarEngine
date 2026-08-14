import Enemy from "../entities/Enemy.js";
import HealthComponent from "../components/HealthComponent.js";
import SpriteRenderer from "../components/SpriteRenderer.js";
import Rigidbody from "../physics/Rigidbody.js";
import AttackComponent from "../components/AttackComponent.js";
import AIComponent from "../components/AIComponent.js";
import Animator from "../components/Animator.js";
export default class EnemyPrefab {

    static create(x = 0, y = 0, type = "slime") {

        const configurations = {

            slime: {
                name: "Slime",
                sprite: "slimeWalk",
                width: 512,
                height: 320,
                scale: 0.2,
                health: 50,
                speed: 80,
                damage: 10,
                range: 50,
                cooldown: 1.0
            },

            goblin: {
                name: "Goblin",
                sprite: "goblin",
                width: 218,
                height: 267,
                scale: 0.4,
                health: 80,
                speed: 100,
                damage: 15,
                range: 50,
                cooldown: 1.0
            },

            minotaur: {
                name: "Minotaur",
                sprite: "minotaur",
                width: 203,
                height: 256,
                scale: 0.35,
                health: 150,
                speed: 55,
                damage: 25,
                range: 60,
                cooldown: 1.2
            }

        };

        const config =
            configurations[type] ||
            configurations.slime;

        const enemy =
            new Enemy(config.name);

        enemy.transform.position.set(x, y);

        enemy.transform.scale.set(
            config.scale,
            config.scale
        );

        enemy.addComponent(
            new SpriteRenderer(
                config.sprite,
                0,
                0,
                config.width,
                config.height
            )
        );

        if (type === "slime") {

            enemy.addComponent(
                new Animator(
                    512,
                    320,
                    4,
                    8
                )
            );

       } 

        enemy.addComponent(
            new Rigidbody(
                config.width * config.scale,
                config.height * config.scale
            )
        );

        enemy.addComponent(
            new AIComponent(
                config.speed,
                250,
                config.range
            )
        );

        enemy.addComponent(
            new HealthComponent(
                config.health
            )
        );

        enemy.addComponent(
            new AttackComponent(
                config.damage,
                config.range,
                config.cooldown
            )
        );

        return enemy;

    }

}