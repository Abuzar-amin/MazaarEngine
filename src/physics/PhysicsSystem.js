import Rigidbody from "./Rigidbody.js";
import Time from "../core/Time.js";

export default class PhysicsSystem {

    static update(scene) {

        for (const object of scene.gameObjects) {

            const rigidbody = object.getComponent(Rigidbody);

            if (!rigidbody) continue;

            rigidbody.velocity.y +=
                rigidbody.gravity * Time.deltaTime;

            // ==========================
            // X Movement
            // ==========================

            const nextX =
                object.transform.position.x +
                rigidbody.velocity.x * Time.deltaTime;

            let xCheck;

            if (rigidbody.velocity.x > 0) {

                // Moving right
                xCheck = nextX + rigidbody.width;

            } else {

                // Moving left
                xCheck = nextX;

            }

            const yCenter =
                object.transform.position.y +
                rigidbody.height / 2;

            if (
                !scene.world ||
                !scene.world.isSolidAt(xCheck, yCenter)
            ) {

                object.transform.position.x = nextX;

            }

            // ==========================
            // Y Movement
            // ==========================

            const nextY =
                object.transform.position.y +
                rigidbody.velocity.y * Time.deltaTime;

            let yCheck;

            if (rigidbody.velocity.y > 0) {

                // Moving down
                yCheck = nextY + rigidbody.height;

            } else {

                // Moving up
                yCheck = nextY;

            }

            const xCenter =
                object.transform.position.x +
                rigidbody.width / 2;

            if (
                !scene.world ||
                !scene.world.isSolidAt(xCenter, yCheck)
            ) {

                object.transform.position.y = nextY;

            }

        }

    }

}