import Component from "./Component.js";

export default class TileMapRenderer extends Component {

    constructor(tileMap, tileSet) {

        super();

        this.tileMap = tileMap;
        this.tileSet = tileSet;

    }

    render(renderer) {

        const camera = renderer.camera;

        for (let y = 0; y < this.tileMap.height; y++) {

            for (let x = 0; x < this.tileMap.width; x++) {

                const id = this.tileMap.getTile(x, y);

                const tile = this.tileSet.get(id);

                if (!tile) continue;

                const image =
                    renderer.assetManager.getImage(tile.imageName);

                if (!image) continue;

                renderer.drawImage(

                    image,

                    x * this.tileMap.tileSize - camera.position.x,
                    y * this.tileMap.tileSize - camera.position.y,

                    this.tileMap.tileSize,
                    this.tileMap.tileSize

                );

            }

        }

    }

}