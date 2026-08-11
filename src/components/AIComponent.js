import Component from "./Component.js";
import Rigidbody from "../physics/Rigidbody.js";
import CombatSystem from "../systems/CombatSystem.js";
export default class AIComponent extends Component {

    constructor(
        speed = 120,
        detectionRange = 250,
        attackRange = 50
    ) {

        super();

        this.speed = speed;

        this.detectionRange = detectionRange;

        this.attackRange = attackRange;

    }

    update() {

        const scene = this.gameObject.scene;

        if (!scene || !scene.player) return;

        const rigidbody =
            this.gameObject.getComponent(Rigidbody);

        if (!rigidbody) return;

        const player = scene.player;

        const dx =
            player.transform.position.x -
            this.gameObject.transform.position.x;

        const dy =
            player.transform.position.y -
            this.gameObject.transform.position.y;

        const distance =
            Math.hypot(dx, dy);
        
        if (distance <= this.attackRange) {

            rigidbody.velocity.x = 0;
            rigidbody.velocity.y = 0;

            CombatSystem.attack(this.gameObject);
            console.log("Enemy attempting attack");

            return;

        }

        rigidbody.velocity.x = 0;
        rigidbody.velocity.y = 0;

        if (
            distance > this.detectionRange ||
            distance === 0
        ) {

            return;

        }

        rigidbody.velocity.x =
            (dx / distance) * this.speed;

        rigidbody.velocity.y =
            (dy / distance) * this.speed;

    }

}