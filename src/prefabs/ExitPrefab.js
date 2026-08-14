import Exit from "../entities/Exit.js";
import SpriteRenderer from "../components/SpriteRenderer.js";

export default class ExitPrefab {

    static create(x = 0, y = 0) {

        const exit = new Exit();

        exit.transform.position.set(x, y);

        exit.transform.scale.set(0.65, 0.65);

        exit.addComponent(
            new SpriteRenderer(
                "exit",
                0,
                0,
                146,
                197
            )
        );

        return exit;

    }

}