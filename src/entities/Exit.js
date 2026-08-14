import Entity from "./Entity.js";

export default class Exit extends Entity {

    constructor() {

        super("Exit");

        this.completed = false;

    }

    activate(player) {

        if (this.completed) return;

        this.completed = true;

        this.scene.engine.gameState = "victory";

        console.log("You Win!");

    }

}