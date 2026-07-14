import TileMap from "./TileMap.js";
import TileSet from "./TileSet.js";
import Tile from "./Tile.js";
import Layer from "./Layer.js";

import AssetManager from "../../assets/AssetManager.js";

export default class World {

    constructor(width, height, tileSize) {

        this.tileMap = new TileMap(width, height, tileSize);

        // Layers
        this.layers = [];

        this.layers.push(
            new Layer(
                "Ground",
                width,
                height
            )
        );

        this.tileSet = new TileSet();

        // Register tiles
        this.tileSet.add(
            new Tile(0, "grass", false)
        );

        this.tileSet.add(
            new Tile(1, "stone", true)
        );

        // Fill with grass
        this.tileMap.fill(0);
        this.getLayer("Ground").fill(0);

        // ==========================
        // Top Wall
        // ==========================

        for (let x = 0; x < this.tileMap.width; x++) {

            this.tileMap.setTile(x, 0, 1);

            this.getLayer("Ground").setTile(
                x,
                0,
                1
            );

        }

        // ==========================
        // Bottom Wall
        // ==========================

        for (let x = 0; x < this.tileMap.width; x++) {

            this.tileMap.setTile(
                x,
                this.tileMap.height - 1,
                1
            );

            this.getLayer("Ground").setTile(
                x,
                this.tileMap.height - 1,
                1
            );

        }

        // ==========================
        // Left Wall
        // ==========================

        for (let y = 0; y < this.tileMap.height; y++) {

            this.tileMap.setTile(
                0,
                y,
                1
            );

            this.getLayer("Ground").setTile(
                0,
                y,
                1
            );

        }

        // ==========================
        // Right Wall
        // ==========================

        for (let y = 0; y < this.tileMap.height; y++) {

            this.tileMap.setTile(
                this.tileMap.width - 1,
                y,
                1
            );

            this.getLayer("Ground").setTile(
                this.tileMap.width - 1,
                y,
                1
            );

        }

    }

render(renderer) {

    const camera = renderer.camera;

    const ground = this.getLayer("Ground");

    const tileSize = this.tileMap.tileSize;

    const startColumn = Math.max(
        0,
        Math.floor(camera.position.x / tileSize)
    );

    const endColumn = Math.min(
        ground.width - 1,
        Math.ceil(
            (camera.position.x + camera.width) / tileSize
        )
    );

    const startRow = Math.max(
        0,
        Math.floor(camera.position.y / tileSize)
    );

    const endRow = Math.min(
        ground.height - 1,
        Math.ceil(
            (camera.position.y + camera.height) / tileSize
        )
    );

    for (let y = startRow; y <= endRow; y++) {

        for (let x = startColumn; x <= endColumn; x++) {

            const tileId =
                ground.getTile(x, y);

            const tile =
                this.tileSet.get(tileId);

            if (!tile) continue;

            const image =
                AssetManager.getImage(
                    tile.imageName
                );

            if (!image) continue;

            renderer.renderQueue.submit({

                type: "sprite",

                image,

                sx: 0,
                sy: 0,

                sw: tileSize,
                sh: tileSize,

                dx:
                    x * tileSize -
                    camera.position.x,

                dy:
                    y * tileSize -
                    camera.position.y,

                dw: tileSize,
                dh: tileSize

            });

        }

    }

}

    isSolidAt(worldX, worldY) {

        const tile = this.tileMap.worldToTile(
            worldX,
            worldY
        );

        return this.tileMap.isSolid(
            tile.x,
            tile.y,
            this.tileSet
        );

    }

    getLayer(name) {

        return this.layers.find(
            layer => layer.name === name
        );

    }

}