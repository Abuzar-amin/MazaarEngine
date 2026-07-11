import GameObject from "../scene/GameObject.js";

import RectangleRenderer from "../components/RectangleRenderer.js";
import BoxCollider from "../physics/BoxCollider.js";

export default class WallPrefab {

    static create(x = 0, y = 0) {

        const wall = new GameObject("Wall");

        wall.transform.position.set(x, y);

        wall.addComponent(
            new RectangleRenderer(
                200,
                200,
                "red"
            )
        );

        wall.addComponent(
            new BoxCollider(
                200,
                200
            )
        );

        return wall;

    }

}