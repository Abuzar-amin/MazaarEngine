import Rigidbody from "./Rigidbody.js";
import Time from "../core/Time.js";

export default class PhysicsSystem {

    static update(scene) {

        for (const object of scene.gameObjects) {

            const rigidbody = object.getComponent(Rigidbody);

            if (!rigidbody) continue;

            rigidbody.velocity.y +=
                rigidbody.gravity * Time.deltaTime;

            object.transform.position.x +=
                rigidbody.velocity.x * Time.deltaTime;

            object.transform.position.y +=
                rigidbody.velocity.y * Time.deltaTime;

        }

    }

}