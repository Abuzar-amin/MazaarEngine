import RenderQueue from "./RenderQueue.js";
export default class Renderer {

    constructor() {

        this.renderQueue = new RenderQueue();
        this.canvas = document.createElement("canvas");

        this.context = this.canvas.getContext("2d");

        this.canvas.width = 1280;
        this.canvas.height = 720;

        this.camera = null;

        document.body.appendChild(this.canvas);

    }

flush() {

    for (const command of this.renderQueue.commands) {

        switch (command.type) {

            case "rectangle":

                this.drawRectangle(
                    command.x,
                    command.y,
                    command.width,
                    command.height,
                    command.color
                );

                break;

            case "sprite":

                this.context.drawImage(
                    command.image,
                    command.sx,
                    command.sy,
                    command.sw,
                    command.sh,
                    command.dx,
                    command.dy,
                    command.dw,
                    command.dh
                );

                break;

        }

    }

    this.renderQueue.clear();

}

    render() {

        this.context.fillStyle = "#1E1E1E";

        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
        this.flush();

    }
    drawRectangle(x, y, width, height, color) {

    this.context.fillStyle = color;

    this.context.fillRect(
        x,
        y,
        width,
        height
    );

}
    drawImage(image, x, y, width, height) {

    this.context.drawImage(
        image,
        x,
        y,
        width,
        height
    );

}
    drawSprite(
    image,

    sx,
    sy,

    sw,
    sh,

    dx,
    dy,

    dw,
    dh
) {

    this.context.drawImage(
        image,

        sx,
        sy,

        sw,
        sh,

        dx,
        dy,

        dw,
        dh
    );

}

}