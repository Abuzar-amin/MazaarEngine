import HealthComponent from "../components/HealthComponent.js";

export default class HUD {

    render(renderer, player) {

        if (!player) return;

        const context = renderer.context;

        context.fillStyle = "white";
        context.font = "24px Arial";

        const hp = player.getHealth(); 

        context.fillText(
            `HP: ${hp}`,
            20,
            40
        );

        context.fillText(
            `Keys: ${player.data.items.key || 0}`,
            20,
            75
        );

    }

}