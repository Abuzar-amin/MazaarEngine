import GameObject from "../scene/GameObject.js";

import SpriteRenderer from "../components/SpriteRenderer.js";
import CollectibleComponent from "../components/CollectibleComponent.js";

export default class KeyPrefab {

    static create(x = 0, y = 0) {

        const key = new GameObject("Key");

        key.transform.position.set(x, y);

        key.transform.scale.set(1.5, 1.5);

        key.addComponent(
            new SpriteRenderer(
                        "key",
                        0,
                        0,
                        36,
                        14
                    )
        );

        key.addComponent(
            new CollectibleComponent("key")
        );

        return key;

    }

}