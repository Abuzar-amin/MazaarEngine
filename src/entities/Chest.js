import Entity from "./Entity.js";
import SpriteRenderer from "../components/SpriteRenderer.js";
import PotionPrefab from "../prefabs/PotionPrefab.js";

export default class Chest extends Entity {

    constructor() {

        super("Chest");

        this.open = false;

    }

    interact(player) {

        if (this.open) {

            return;

        }

        const keys =
            player.data.items.key || 0;

        if (keys <= 0) {

            console.log("Chest is locked.");

            return;

        }

        player.data.items.key--;

        this.open = true;

        const sprite =
            this.getComponent(SpriteRenderer);

        if (sprite) {

            sprite.imageName = "chest-open";

        }

        const potion =
            PotionPrefab.create(
                this.transform.position.x + 70,
                this.transform.position.y - 40
            );

        this.scene.add(potion);

        console.log("You found a potion!");
    }

}