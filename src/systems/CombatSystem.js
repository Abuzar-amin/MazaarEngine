import AttackComponent from "../components/AttackComponent.js";
import HealthComponent from "../components/HealthComponent.js";

export default class CombatSystem {

    static attack(attacker) {
        const attack =
            attacker.getComponent(AttackComponent);

        if (!attack) return;

        const scene = attacker.scene;

        let closestEnemy = null;
        let closestDistance = Infinity;

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

            if (
                distance < closestDistance &&
                distance <= attack.range
            ) {

                closestDistance = distance;
                closestEnemy = object;

            }

        }

        if (!closestEnemy) return;

        const health =
            closestEnemy.getComponent(HealthComponent);

        health.damage(attack.damage);

        console.log(
            `${closestEnemy.name}: ${health.currentHealth}/${health.maxHealth}`
        );

    }

}