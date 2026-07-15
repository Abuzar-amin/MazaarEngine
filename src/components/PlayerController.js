import Component from "./Component.js";
import Keyboard from "../input/Keyboard.js";
import Rigidbody from "../physics/Rigidbody.js";
import CombatSystem from "../systems/CombatSystem.js";
export default class PlayerController extends Component {

    constructor(speed = 250) {

        super();

        this.speed = speed;

        this.attackPressed = false;

    }

    update() {

        const rigidbody =
            this.gameObject.getComponent(Rigidbody);

        if (!rigidbody) return;

        rigidbody.velocity.x = 0;
        rigidbody.velocity.y = 0;

        if (Keyboard.isKeyDown("a")) {

            rigidbody.velocity.x = -this.speed;

        }

        if (Keyboard.isKeyDown("d")) {

            rigidbody.velocity.x = this.speed;

        }

        if (Keyboard.isKeyDown("w")) {

            rigidbody.velocity.y = -this.speed;

        }

        if (Keyboard.isKeyDown("s")) {

            rigidbody.velocity.y = this.speed;

        }

    if (Keyboard.isKeyDown(" ")) {

        if (!this.attackPressed) {

            CombatSystem.attack(
                this.gameObject,
                this.gameObject.scene
            );

            this.attackPressed = true;

        }

    } else {

        this.attackPressed = false;

    }

    }

}