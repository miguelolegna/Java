# Snake Game

This is a simple Snake game implemented in Java using Swing for the graphical user interface. The game allows players to control a snake that grows in length as it consumes food while avoiding collisions with itself and the game boundaries.

## Project Structure

```
snake-game
├── src
│   ├── main
│   │   ├── java
│   │   │   ├── com
│   │   │   │   └── example
│   │   │   │       ├── SnakeGame.java      # Entry point of the application
│   │   │   │       ├── Snake.java          # Class representing the snake
│   │   │   │       ├── GamePanel.java      # Class for rendering game graphics
│   │   │   │       ├── Point.java          # Class for 2D points
│   │   │   │       └── Direction.java      # Enum for snake movement directions
│   │   └── resources
│   │       └── game.properties              # Configuration properties for the game
├── .gitignore                               # Specifies files to ignore by Git
├── build.gradle                             # Gradle build configuration
└── README.md                                # Project documentation
```

## Requirements

- Java Development Kit (JDK) 8 or higher
- Gradle for building the project

## How to Run the Game

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd snake-game
   ```

3. Build the project using Gradle:
   ```
   ./gradlew build
   ```

4. Run the game:
   ```
   java -cp build/libs/snake-game.jar com.example.SnakeGame
   ```

## Controls

- Use the arrow keys to control the direction of the snake.
- The game ends if the snake collides with itself or the boundaries.

## License

This project is licensed under the MIT License. See the LICENSE file for details.