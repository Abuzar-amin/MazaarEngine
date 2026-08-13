import Chest from "../entities/Chest.js";

import SpriteRenderer from "../components/SpriteRenderer.js";
import Rigidbody from "../physics/Rigidbody.js";

export default class ChestPrefab {

    static create(x = 0, y = 0) {

        const chest = new Chest();

        chest.transform.position.set(x, y);
        chest.transform.scale.set(0.6, 0.6);
        chest.addComponent(
            new SpriteRenderer("chest")
        );

        chest.addComponent(
            new Rigidbody(64, 64)
        );

        return chest;

    }

}