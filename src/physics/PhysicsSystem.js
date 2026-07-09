import BoxCollider from "./BoxCollider.js";
import Rigidbody from "./Rigidbody.js";

export default class PhysicsSystem {

    static update(scene) {

        const objects = scene.gameObjects;

        for (let i = 0; i < objects.length; i++) {

            const objectA = objects[i];

            const colliderA =
                objectA.getComponent(BoxCollider);

            if (!colliderA) continue;

            for (let j = i + 1; j < objects.length; j++) {

                const objectB = objects[j];

                const colliderB =
                    objectB.getComponent(BoxCollider);

                if (!colliderB) continue;

                if (this.intersects(colliderA, colliderB)) {

                    const bodyA =
                        objectA.getComponent(Rigidbody);

                    if (bodyA) {

                        bodyA.velocity.x = 0;
                        bodyA.velocity.y = 0;

                    }

                }

            }

        }

    }

    static intersects(a, b) {

        const A = a.getBounds();
        const B = b.getBounds();

        return (
            A.left < B.right &&
            A.right > B.left &&
            A.top < B.bottom &&
            A.bottom > B.top
        );

    }

}