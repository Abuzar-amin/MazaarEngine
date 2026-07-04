export default class Renderer {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");

        this.canvas.width = 1280;
        this.canvas.height = 720;

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
}