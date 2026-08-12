import Component from "./Component.js";

export default class CollectibleComponent extends Component {

    constructor(itemName, radius = 40) {

        super();

        this.itemName = itemName;

        this.radius = radius;

    }

    update() {

        const scene = this.gameObject.scene;

        if (!scene || !scene.player) return;

        const player = scene.player;

        const dx =
            player.transform.position.x -
            this.gameObject.transform.position.x;

        const dy =
            player.transform.position.y -
            this.gameObject.transform.position.y;

        const distance =
            Math.hypot(dx, dy);

        if (distance > this.radius) {

            return;

        }

        player.data.items[this.itemName] =
            (player.data.items[this.itemName] || 0) + 1;

        console.log(
            `Collected ${this.itemName}`
        );

        console.log(player.data.items);

        scene.remove(this.gameObject);

    }

}