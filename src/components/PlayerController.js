import Component from "./Component.js";
import Keyboard from "../input/Keyboard.js";
import Rigidbody from "../physics/Rigidbody.js";
import CombatSystem from "../systems/CombatSystem.js";
import Chest from "../entities/Chest.js";

export default class PlayerController extends Component {

    constructor(speed = 250) {

        super();

        this.speed = speed;

        this.attackPressed = false;

        this.interactionRange = 80;

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
                    this.gameObject
                );

                this.attackPressed = true;

            }

        } else {

            this.attackPressed = false;

        }

        if (Keyboard.isKeyPressed("e")) {

            this.interact();

        }

    }

    interact() {

        const scene = this.gameObject.scene;

        for (const object of scene.gameObjects) {

            if (!(object instanceof Chest)) {
                continue;
            }

            const dx =
                object.transform.position.x -
                this.gameObject.transform.position.x;

            const dy =
                object.transform.position.y -
                this.gameObject.transform.position.y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);

            if (distance <= this.interactionRange) {

                object.interact(this.gameObject);

                return;

            }

        }

    }

}