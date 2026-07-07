import Component from "./Component.js";

export default class RectangleRenderer extends Component {

    constructor(width, height, color = "white") {
        super();

        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(renderer) {

        const ctx = renderer.context;
        const transform = this.gameObject.transform;

        ctx.fillStyle = this.color;

        const camera = renderer.camera;

    const screenX =
        transform.position.x - camera.position.x;

    const screenY =
        transform.position.y - camera.position.y;

    ctx.fillRect(
        screenX,
        screenY,
        this.width * transform.scale.x,
        this.height * transform.scale.y
    );

    }

}