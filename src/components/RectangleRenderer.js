import Component from "./Component.js";

export default class RectangleRenderer extends Component {

    constructor(width, height, color = "white") {

        super();

        this.width = width;
        this.height = height;
        this.color = color;

    }

    render(renderer) {

        const transform = this.gameObject.transform;
        const camera = renderer.camera;

        const screenX =
            transform.position.x - camera.position.x;

        const screenY =
            transform.position.y - camera.position.y;

        renderer.renderQueue.submit({

            type: "rectangle",

            x: screenX,

            y: screenY,

            width: this.width * transform.scale.x,

            height: this.height * transform.scale.y,

            color: this.color

        });

    }

}