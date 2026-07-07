import Engine from "./core/Engine.js";
import GameObject from "./scene/GameObject.js";
import RectangleRenderer from "./components/RectangleRenderer.js";
import PlayerController from "./components/PlayerController.js";

const engine = new Engine();

const square = new GameObject("Square");

square.transform.position.x = 300;
square.transform.position.y = 200;

square.addComponent(
    new RectangleRenderer(200, 150, "#4CAF50")
);

square.addComponent(
    new PlayerController()
);

engine.scene.add(square);

const box = new GameObject("Box");

box.transform.position.set(900, 500);

box.addComponent(
    new RectangleRenderer(150, 150, "red")
);

engine.scene.add(box);
engine.camera.follow(square);
engine.start();
