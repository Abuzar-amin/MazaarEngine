# MazaarEngine

A lightweight 2D game engine built from scratch with vanilla JavaScript and HTML5 Canvas.

MazaarEngine is currently demonstrated through a small dungeon game featuring player movement, animation, physics, enemy AI, combat, collectibles, chests, a boss fight, and a complete level progression system.

## 🎮 Live Demo

**[Play MazaarEngine](https://abuzar-amin.github.io/MazaarEngine/)**

## ✨ Features

- HTML5 Canvas rendering
- Component-based game object architecture
- Scene and entity management
- Render queue
- Sprite rendering and animation
- Keyboard input system
- Rigidbody-based movement and collision
- Enemy AI and chase behaviour
- Health and combat systems
- Collectibles and inventory
- Interactive chests
- Multiple enemy types
- Boss enemy (Minotaur)
- Tile-based world/map loading
- Camera following system
- HUD and game states
- Victory and restart system
- GitHub Pages deployment

## 🏗️ Engine Architecture

The engine is organized into modular systems rather than putting all game logic into a single file.

```text
src/
├── components/     Components such as rendering, health, AI and combat
├── core/            Engine, game loop and timing
├── entities/        Player, enemies, chest and other game objects
├── graphics/        Renderer, camera and render queue
├── input/           Keyboard input handling
├── physics/         Rigidbody and collision logic
├── scene/           Scene and GameObject management
├── systems/         Gameplay systems
├── ui/              HUD
└── world/           Tile maps and world loading

assets/
└── sprites/         Game artwork and sprites

demo/
└── DemoScene.js     Playable dungeon demonstration

🕹️ Controls
Key	Action
W A S D	Move
SPACE	Attack
E	Interact with chests
R	Restart after completion/game over
🗺️ Demo Gameplay

The current demo is designed as a small dungeon progression:

Slime Room
    ↓
Goblin Room
    ↓
Key + Chest
    ↓
Minotaur Tunnel
    ↓
Portal
    ↓
Victory

The player must defeat enemies, collect the key, interact with the chest, survive the Minotaur, and reach the portal.

🛠️ Tech Stack
JavaScript (ES Modules)
HTML5 Canvas
HTML / CSS
Git & GitHub
GitHub Pages

No game engine or rendering framework is used.

🚀 Run Locally

Clone the repository:

git clone https://github.com/Abuzar-amin/MazaarEngine.git
cd MazaarEngine

Because the project uses ES modules and fetch() for map loading, run it through a local HTTP server rather than opening index.html directly.

For example, with VS Code, use the Live Server extension.

Then open the provided local URL in your browser.

📌 Current Status

v1 — Playable Demo

The current release focuses on establishing the core engine architecture and demonstrating it through a complete playable dungeon.

Future versions will focus on deeper engine improvements, including more advanced rendering, physics, scene management, tooling, performance, and extensibility.

👤 Author

Abuzar Amin

GitHub: https://github.com/Abuzar-amin
LinkedIn: https://www.linkedin.com/in/abuzar-amin-4945b4254