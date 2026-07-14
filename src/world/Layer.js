export default class Layer {

    constructor(name, width, height) {

        this.name = name;

        this.width = width;
        this.height = height;

        this.tiles = [];

        for (let y = 0; y < height; y++) {

            this.tiles[y] = [];

            for (let x = 0; x < width; x++) {

                this.tiles[y][x] = -1;

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

}