export default class HUD {

    render(renderer, player, gameState = "playing") {

        if (!player) return;

        const context = renderer.context;

        // =========================
        // Gameplay HUD
        // =========================

        if (gameState === "playing") {

            context.fillStyle = "white";
            context.font = "24px Arial";
            context.textAlign = "left";

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

            context.fillText(
                `Potions: ${player.data.items.potion || 0}`,
                20,
                110
            );

            return;

        }

        // =========================
        // Overlay
        // =========================

        context.fillStyle = "rgba(0, 0, 0, 0.75)";

        context.fillRect(
            0,
            0,
            renderer.canvas.width,
            renderer.canvas.height
        );

        context.textAlign = "center";

        // =========================
        // Victory
        // =========================

        if (gameState === "victory") {

            context.fillStyle = "white";

            context.font = "bold 52px Arial";

            context.fillText(
                "LEVEL 1 COMPLETE",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 - 100
            );

            context.font = "24px Arial";

            context.fillText(
                "You survived the dungeon.",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 - 45
            );

            context.font = "bold 30px Arial";

            context.fillText(
                "LEVEL 2",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 + 20
            );

            context.font = "22px Arial";

            context.fillText(
                "Want to see what's next?",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 + 60
            );

            context.font = "18px Arial";

            context.fillText(
                "Press R to play again",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 + 165
            );

        }

        // =========================
        // Defeat
        // =========================

        if (gameState === "defeat") {

            context.fillStyle = "white";

            context.font = "bold 56px Arial";

            context.fillText(
                "GAME OVER",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 - 40
            );

            context.font = "24px Arial";

            context.fillText(
                "The dungeon got the better of you.",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 + 15
            );

            context.font = "20px Arial";

            context.fillText(
                "Press R to try again",
                renderer.canvas.width / 2,
                renderer.canvas.height / 2 + 65
            );

        }

        context.textAlign = "left";

    }

}