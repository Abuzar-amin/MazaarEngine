import Component from "./Component.js";
import Keyboard from "../input/Keyboard.js";
import Rigidbody from "../physics/Rigidbody.js";
import CombatSystem from "../systems/CombatSystem.js";
import Chest from "../entities/Chest.js";
import Exit from "../entities/Exit.js";
import SpriteRenderer from "./SpriteRenderer.js";
import Animator from "./Animator.js";
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
        const animator =
            this.gameObject.getComponent(Animator);

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
            const moving =
        rigidbody.velocity.x !== 0 ||
        rigidbody.velocity.y !== 0;

    if (animator) {

        if (moving) {
            animator.play();
        } else {
            animator.stop();
        }

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
        this.checkExit();

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
    checkExit() {

        const scene = this.gameObject.scene;

        const player = this.gameObject;

        const playerX =
            player.transform.position.x;

        const playerY =
            player.transform.position.y;

        const playerRigidbody =
            player.getComponent(Rigidbody);

        const playerWidth =
            playerRigidbody
                ? playerRigidbody.width
                : 0;

        const playerHeight =
            playerRigidbody
                ? playerRigidbody.height
                : 0;

        const playerCenterX =
            playerX + playerWidth / 2;

        const playerCenterY =
            playerY + playerHeight / 2;

        for (const object of scene.gameObjects) {

            if (!(object instanceof Exit)) {
                continue;
            }

            const sprite =
                object.getComponent(SpriteRenderer);

            if (!sprite) {
                continue;
            }

            const exitX =
                object.transform.position.x;

            const exitY =
                object.transform.position.y;

            const exitWidth =
                sprite.sourceWidth *
                object.transform.scale.x;

            const exitHeight =
                sprite.sourceHeight *
                object.transform.scale.y;

            const exitRight =
                exitX + exitWidth;

            const exitBottom =
                exitY + exitHeight;

            const inside =
                playerCenterX >= exitX &&
                playerCenterX <= exitRight &&
                playerCenterY >= exitY &&
                playerCenterY <= exitBottom;

            if (inside) {

                object.activate(player);

                return;

            }

        }

    }

}