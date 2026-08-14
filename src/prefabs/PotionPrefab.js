import GameObject from "../scene/GameObject.js";

import SpriteRenderer from "../components/SpriteRenderer.js";
import CollectibleComponent from "../components/CollectibleComponent.js";

export default class PotionPrefab {

    static create(x = 0, y = 0) {

        const potion = new GameObject("Potion");

        potion.transform.position.set(x, y);

        potion.transform.scale.set(1, 1);

        potion.addComponent(
            new SpriteRenderer(
                "potion",
                0,
                0,
                64,
                64
            )
        );

        potion.addComponent(
            new CollectibleComponent(
                "potion",
                35
            )
        );

        return potion;

    }

}