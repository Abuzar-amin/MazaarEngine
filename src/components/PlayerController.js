import Component from "./Component.js";
import Keyboard from "../input/Keyboard.js";
import Time from "../core/Time.js";

export default class PlayerController extends Component {

    constructor(speed = 250) {

        super();

        this.speed = speed;

    }

    update() {

        const position = this.gameObject.transform.position;

        if (Keyboard.isKeyDown("a")) {
            position.x -= this.speed * Time.deltaTime;
        }

        if (Keyboard.isKeyDown("d")) {
            position.x += this.speed * Time.deltaTime;
        }

        if (Keyboard.isKeyDown("w")) {
            position.y -= this.speed * Time.deltaTime;
        }

        if (Keyboard.isKeyDown("s")) {
            position.y += this.speed * Time.deltaTime;
        }

    }

}