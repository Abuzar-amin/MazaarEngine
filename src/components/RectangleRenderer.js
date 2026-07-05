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

        ctx.fillRect(
            transform.position.x,
            transform.position.y,
            this.width * transform.scale.x,
            this.height * transform.scale.y
        );

    }

}