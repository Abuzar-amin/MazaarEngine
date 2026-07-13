import World from "./World.js";

export default class WorldLoader {

    static async load(path) {

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Failed to load map: ${path}`);
        }

        const data = await response.json();

        const world = new World(
            data.width,
            data.height,
            data.tileSize
        );

        for (let y = 0; y < data.height; y++) {

            for (let x = 0; x < data.width; x++) {

                world.tileMap.setTile(
                    x,
                    y,
                    data.tiles[y][x]
                );

            }

        }

        return world;

    }

}