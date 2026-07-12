import TileMap from "./TileMap.js";
import TileSet from "./TileSet.js";
import Tile from "./Tile.js";

import AssetManager from "../../assets/AssetManager.js";

export default class World {

    constructor(width, height, tileSize) {

        this.tileMap = new TileMap(width, height, tileSize);

        this.tileSet = new TileSet();

        // Register tiles
        this.tileSet.add(
            new Tile(0, "grass")
        );

        // Fill the map with grass
        this.tileMap.fill(0);

    }

    render(renderer) {

        const camera = renderer.camera;

        this.tileMap.forEach((x, y, tileId) => {

            const tile = this.tileSet.get(tileId);

            if (!tile) return;

            const image =
                AssetManager.getImage(tile.imageName);

            if (!image) return;

            renderer.renderQueue.submit({

                type: "sprite",

                image,

                sx: 0,
                sy: 0,

                sw: this.tileMap.tileSize,
                sh: this.tileMap.tileSize,

                dx:
                    x * this.tileMap.tileSize -
                    camera.position.x,

                dy:
                    y * this.tileMap.tileSize -
                    camera.position.y,

                dw: this.tileMap.tileSize,
                dh: this.tileMap.tileSize

            });

        });

    }

}