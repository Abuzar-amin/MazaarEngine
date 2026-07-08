import Component from "../components/Component.js";
import Time from "../core/Time.js";
import Vector2 from "../math/Vector2.js";

export default class Rigidbody extends Component {

    constructor() {

        super();

        this.velocity = new Vector2();

        this.gravity = 0;

    }

    update() {

        this.velocity.y += this.gravity * Time.deltaTime;

        this.gameObject.transform.position.x +=
            this.velocity.x * Time.deltaTime;

        this.gameObject.transform.position.y +=
            this.velocity.y * Time.deltaTime;

    }

}