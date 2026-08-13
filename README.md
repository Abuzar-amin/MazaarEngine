# MazaarEngine

MazaarEngine is a lightweight 2D game engine built from scratch in JavaScript.

The project focuses on understanding and implementing core game-engine concepts without relying on an external game engine.

## Features

- Component-based entity architecture
- Scene and GameObject system
- Render queue architecture
- 2D sprite rendering
- Camera system
- Keyboard input
- Rigidbody-based physics
- Collision handling
- Tile-based world loading
- Enemy AI
- Combat and health systems
- Collectible items
- Player state
- Chest interaction
- HUD
- Exit and victory state
- Scene restart

## Demo

The included demo is a small dungeon game built using MazaarEngine.

The player must:

1. Explore the dungeon
2. Fight slimes
3. Collect a key
4. Use the key to open a chest
5. Receive a potion
6. Reach the exit
7. Complete the level

## Controls

| Key | Action |
|---|---|
| W A S D | Move |
| Space | Attack |
| E | Interact |
| R | Restart after victory |

## Architecture

MazaarEngine is organized around a small set of core responsibilities.

```text
Engine
├── GameLoop
├── Renderer
├── Camera
├── Scene
└── HUD

Scene
└── GameObjects
    ├── Player
    ├── Enemy
    ├── Chest
    └── Exit

GameObjects
└── Components
    ├── AI
    ├── Health
    ├── Attack
    ├── PlayerController
    ├── SpriteRenderer
    └── Collectible