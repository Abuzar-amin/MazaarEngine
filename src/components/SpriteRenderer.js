import Component from "./Component.js";
import AssetManager from "../../assets/AssetManager.js";
export default class SpriteRenderer extends Component {

    constructor(
        imageName,
        sourceX = 0,
        sourceY = 0,
        sourceWidth = null,
        sourceHeight = null,
        offsetX = 0,
        offsetY = 0
    ) {

        super();

        this.imageName = imageName;

        this.sourceX = sourceX;
        this.sourceY = sourceY;

        this.sourceWidth = sourceWidth;
        this.sourceHeight = sourceHeight;

        this.offsetX = offsetX;
        this.offsetY = offsetY;

    }

render(renderer) {

    const image = AssetManager.getImage(this.imageName);

    if (!image) return;
    const sourceWidth =
        this.sourceWidth ?? image.width;

    const sourceHeight =
        this.sourceHeight ?? image.height;

    const transform = this.gameObject.transform;
    const camera = renderer.camera;

    const screenX =
        transform.position.x -
        camera.position.x +
        this.offsetX;

    const screenY =
        transform.position.y -
        camera.position.y +
        this.offsetY;

    renderer.renderQueue.submit({

        type: "sprite",

        image: image,

        sx: this.sourceX,
        sy: this.sourceY,

        sw: sourceWidth,
        sh: sourceHeight,

        dx: screenX,
        dy: screenY,

        dw: sourceWidth * transform.scale.x,
        dh: sourceHeight * transform.scale.y

    });

}

}