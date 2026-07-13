import Component from "../components/Component.js";
import Vector2 from "../math/Vector2.js";

export default class Rigidbody extends Component {

    constructor(width = 64, height = 64) {

        super();

        this.velocity = new Vector2();

        this.gravity = 0;

        this.width = width;
        this.height = height;

    }

}