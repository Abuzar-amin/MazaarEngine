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

    fill(id) {

    for (let y = 0; y < this.height; y++) {

        for (let x = 0; x < this.width; x++) {

            this.tiles[y][x] = id;

        }

    }

}

forEach(callback) {

    for (let y = 0; y < this.height; y++) {

        for (let x = 0; x < this.width; x++) {

            callback(
                x,
                y,
                this.tiles[y][x]
            );

        }

    }

}

    worldToTile(x, y) {

    return {

        x: Math.floor(x / this.tileSize),

        y: Math.floor(y / this.tileSize)

    };

}
    isSolid(x, y, tileSet) {

    if (
        x < 0 ||
        y < 0 ||
        x >= this.width ||
        y >= this.height
    ) {
        return true;
    }

    return tileSet.isSolid(
        this.getTile(x, y)
    );

}

}