import React, { useState } from 'react';
import "./App.css";
import Square from "./Square";

function calculateWinner(arr) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
          arr[a] &&
          arr[a] === arr[b] &&
          arr[a] === arr[c]
      ) {
          return `${arr[a]} won!`;
      }
  }
  
  return "Who will win?";
}


function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]); // Reset the squares
    setPlayer(true); // Reset the player
  };

  const winner = calculateWinner(squares);

  return (
    <div className="App">
      <div className="container">
        {squares.map((val, index) => (
          <Square
            key={index}
            index={index}
            squareValue={val}
            setSquares={setSquares}
            squares={squares}
            player={player}
            setPlayer={setPlayer}
            handleClick={handleClick}
            winner={winner !== "Who will win?"}  
          />
        ))}
      </div>
      <button onClick={handleClick}>Reset</button>
      <p className="winner-text">{winner}</p> {/* Display winner message */}
    </div>
  );
}

export default App;