# Unit 1 Content Project: Tic-Tac-Toe Game

This project is part of the Unit 1 content for learning React. It demonstrates how to create a simple Tic-Tac-Toe game using React, focusing on concepts such as creating custom components, managing state, gathering user input, and passing props.

## Features

- Create a Tic-Tac-Toe game with a responsive design.
- Implement a game board using custom React components.
- Manage the state of the game board and player turns.
- Allow players to click on squares and update the game state accordingly.
- Determine and display the winner when a player wins the game.
- Reset the game when a "Reset" button is clicked.

## Project Structure

- `src/App.js`: The main application component containing the game logic.
- `src/Square.js`: A custom component representing a single square on the game board.
- `src/App.css`: Stylesheet for the application.
- `public/index.html`: Main HTML file where the React app is rendered.

## Getting Started

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server and launch the app in your browser.

## Usage

- The game starts with an empty game board.
- Players take turns clicking on empty squares to mark them with "X" or "O".
- The game board updates to reflect the player's choice.
- If a player forms a winning combination, the game displays the winner.
- Click the "Reset" button to clear the game board and start a new game.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- JSX: A syntax extension for JavaScript, used for writing React components.
- useState: A React hook for managing state within functional components.

## Acknowledgements

This project is based on the concepts taught in [React Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) on Udemy.
