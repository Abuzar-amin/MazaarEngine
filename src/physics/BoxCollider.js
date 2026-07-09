import Component from "../components/Component.js";

export default class BoxCollider extends Component {

    constructor(width, height) {

        super();

        this.width = width;
        this.height = height;

    }

    getBounds() {

        const position = this.gameObject.transform.position;

        return {

            left: position.x,
            right: position.x + this.width,

            top: position.y,
            bottom: position.y + this.height

        };

    }

}