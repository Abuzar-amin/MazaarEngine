import Component from "./Component.js";

export default class AttackComponent extends Component {

    constructor(damage = 10, range = 100) {

        super();

        this.damage = damage;
        this.range = range;

    }

}