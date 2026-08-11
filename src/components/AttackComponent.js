import Component from "./Component.js";
import Time from "../core/Time.js";

export default class AttackComponent extends Component {

    constructor(
        damage = 10,
        range = 100,
        cooldown = 0.5
    ) {

        super();

        this.damage = damage;
        this.range = range;

        this.cooldown = cooldown;
        this.timer = 0;

    }

    update() {

        if (this.timer > 0) {

            this.timer -= Time.deltaTime;

        }

    }

    canAttack() {

        return this.timer <= 0;

    }

    resetCooldown() {

        this.timer = this.cooldown;

    }

}