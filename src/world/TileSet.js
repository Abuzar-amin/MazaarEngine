export default class TileSet {

    constructor() {

        this.tiles = new Map();

    }

    add(tile) {

        this.tiles.set(tile.id, tile);

    }

    get(id) {

        return this.tiles.get(id);

    }

}