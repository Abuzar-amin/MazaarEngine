export default class TileSet {

    constructor() {

        this.tiles = new Map();

    }

    add(tile) {

    this.tiles.set(tile.id, tile);

    return this;

    }

    get(id) {

        return this.tiles.get(id);

    }

    isSolid(id) {

    const tile = this.tiles.get(id);

    if (!tile) return false;

    return tile.solid;

    }

}