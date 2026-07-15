import AttackComponent from "../components/AttackComponent.js";
import HealthComponent from "../components/HealthComponent.js";

export default class CombatSystem {

    static attack(attacker, scene) {

        const attack =
            attacker.getComponent(AttackComponent);

        if (!attack) return;

        for (const object of scene.gameObjects) {

            if (object === attacker) continue;

            const health =
                object.getComponent(HealthComponent);

            if (!health) continue;

            const dx =
                object.transform.position.x -
                attacker.transform.position.x;

            const dy =
                object.transform.position.y -
                attacker.transform.position.y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);

            if (distance <= attack.range) {

                health.damage(attack.damage);

                console.log(
                    `${object.name} HP: ${health.currentHealth}`
                );

                break;

            }

        }

    }

}