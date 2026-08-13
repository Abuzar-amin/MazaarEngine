export default class HUD {

    render(renderer, player, gameOver = false) {

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

        if (gameOver) {

            context.fillStyle = "white";

            context.font = "bold 56px Arial";

            context.textAlign = "center";

            context.fillText(
                "YOU WIN!",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2
            );

            context.font = "24px Arial";

            context.fillText(
                "Press R to restart",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 + 50
            );

            context.textAlign = "left";

        }

    }

}