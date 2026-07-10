export default class TileMap {

    constructor(width, height, tileSize) {

        this.width = width;

        this.height = height;

        this.tileSize = tileSize;

        this.tiles = [];

        for (let y = 0; y < height; y++) {

            this.tiles[y] = [];

            for (let x = 0; x < width; x++) {

                this.tiles[y][x] = 0;

            }

        }

    }

    setTile(x, y, id) {

        this.tiles[y][x] = id;

    }

    getTile(x, y) {

        return this.tiles[y][x];

    }

}