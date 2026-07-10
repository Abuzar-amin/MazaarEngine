export default class AssetManager {

    static images = new Map();

    static async loadImage(name, path) {

        return new Promise((resolve, reject) => {

            const image = new Image();

            image.src = path;

            image.onload = () => {

                this.images.set(name, image);

                resolve(image);

            };

            image.onerror = () => {

                reject(
                    new Error(`Failed to load image: ${path}`)
                );

            };

        });

    }

    static getImage(name) {

        return this.images.get(name);

    }

}