import Entity from "./Entity.js";
import SpriteRenderer from "../components/SpriteRenderer.js";

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

        player.data.items.potion =
            (player.data.items.potion || 0) + 1;

        this.open = true;

        const sprite =
            this.getComponent(SpriteRenderer);

        if (sprite) {

            sprite.imageName = "chest-open";

        }

        console.log("You found a potion!");
    }

}