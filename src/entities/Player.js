import Entity from "./Entity.js";
import HealthComponent from "../components/HealthComponent.js";
export default class Player extends Entity {

    constructor() {

        super("Player");

        this.faction = "player";

        this.data = {

            items: {}

        };

    }

    getHealth() {

    const health =
        this.getComponent(HealthComponent);

    return health
        ? health.currentHealth
        : 0;

}

}