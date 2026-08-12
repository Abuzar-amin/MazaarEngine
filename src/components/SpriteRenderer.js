import Component from "./Component.js";
import AssetManager from "../../assets/AssetManager.js";
export default class SpriteRenderer extends Component {

    constructor(
        imageName,
        sourceX = 0,
        sourceY = 0,
        sourceWidth = 64,
        sourceHeight = 64
    ) {

        super();

        this.imageName = imageName;

        this.sourceX = sourceX;
        this.sourceY = sourceY;

        this.sourceWidth = sourceWidth;
        this.sourceHeight = sourceHeight;

    }

render(renderer) {

    const image = AssetManager.getImage(this.imageName);

    if (!image) return;

    const transform = this.gameObject.transform;
    const camera = renderer.camera;

    const screenX = transform.position.x - camera.position.x;
    const screenY = transform.position.y - camera.position.y;

    renderer.renderQueue.submit({

        type: "sprite",

        image: image,

        sx: this.sourceX,
        sy: this.sourceY,

        sw: this.sourceWidth,
        sh: this.sourceHeight,

        dx: screenX,
        dy: screenY,

        dw: this.sourceWidth * transform.scale.x,
        dh: this.sourceHeight * transform.scale.y

    });

}

}