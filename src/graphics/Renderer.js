export default class Renderer {

    constructor() {

        this.canvas = document.createElement("canvas");

        this.context = this.canvas.getContext("2d");

        this.canvas.width = 1280;
        this.canvas.height = 720;

        this.camera = null;

        document.body.appendChild(this.canvas);

    }

    render() {

        this.context.fillStyle = "#1E1E1E";

        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

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