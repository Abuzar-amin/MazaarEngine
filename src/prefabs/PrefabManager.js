import PlayerPrefab from "./PlayerPrefab.js";
import WallPrefab from "./WallPrefab.js";

export default class PrefabManager {

    static create(type, ...args) {

        switch (type) {

            case "player":
                return PlayerPrefab.create(...args);

            case "wall":
                return WallPrefab.create(...args);

            default:
                throw new Error(
                    `Unknown prefab: ${type}`
                );

        }

    }

}