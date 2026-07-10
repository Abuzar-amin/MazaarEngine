import Component from "../components/Component.js";
import Vector2 from "../math/Vector2.js";

export default class Rigidbody extends Component {

    constructor() {
        super();

        this.velocity = new Vector2();

        this.gravity = 0;
    }

}