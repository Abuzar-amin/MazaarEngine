import Component from "./Component.js";
import AssetManager from "../../assets/AssetManager.js";

export default class SpriteRenderer extends Component {

    constructor(imageName) {

        super();

        this.imageName = imageName;

        this.sourceX = 0;
        this.sourceY = 0;

        this.sourceWidth = 64;
        this.sourceHeight = 64;

    }

    render(renderer) {

        const image =
            AssetManager.getImage(this.imageName);

        if (!image) return;

        const transform = this.gameObject.transform;
        const camera = renderer.camera;

        const screenX =
            transform.position.x - camera.position.x;

        const screenY =
            transform.position.y - camera.position.y;

        renderer.drawSprite(
            image,

            this.sourceX,
            this.sourceY,

            this.sourceWidth,
            this.sourceHeight,

            screenX,
            screenY,

            this.sourceWidth * transform.scale.x,
            this.sourceHeight * transform.scale.y

        );

    }

}