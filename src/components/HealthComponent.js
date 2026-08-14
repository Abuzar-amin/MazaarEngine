import Component from "./Component.js";

export default class HealthComponent extends Component {

    constructor(maxHealth = 100) {

        super();

        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;

    }

    damage(amount) {

        this.currentHealth = Math.max(
            0,
            this.currentHealth - amount
        );

    if (this.isDead()) {

        if (this.gameObject.faction === "player") {

            this.gameObject.scene.engine.gameState = "defeat";

            console.log("GAME OVER");

        } else {

            this.gameObject.scene.remove(
                this.gameObject
            );

        }

    }

    }

    heal(amount) {

        this.currentHealth = Math.min(
            this.maxHealth,
            this.currentHealth + amount
        );

    }

    isDead() {

        return this.currentHealth <= 0;

    }

}