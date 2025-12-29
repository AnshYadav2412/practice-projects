import React, { useEffect, useState } from "react";
import Cell from "../components/cell";
import winChecker from "../utils/winChecker";

const TicTacToeGame = () => {
  const [cellValue, setCellValue] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [playerInputs, setPlayerInputs] = useState({
    player1: "",
    player2: "",
  });

  const onCellClick = (index) => {
    setCellValue((prev) => {
      if (prev[index] !== null) {
        return prev;
      }

      const copy = [...prev];
      copy[index] = currentPlayer ? "O" : "X";

      currentPlayer
        ? setPlayerInputs((prevInput) => ({
            ...prevInput,
            player2: prevInput.player2 + index,
          }))
        : setPlayerInputs((prevInput) => ({
            ...prevInput,
            player1: prevInput.player1 + index,
          }));

      currentPlayer ? setCurrentPlayer(0) : setCurrentPlayer(1);
      return copy;
    });
  };

  useEffect(() => {
    const player1Wins = winChecker(playerInputs.player1);
    const player2Wins = winChecker(playerInputs.player2);

    console.log("player1" + playerInputs.player1);
    console.log("player2" + playerInputs.player2);

    if (player1Wins) {
      console.log("Player1wins");
    } else if (player2Wins) {
      console.log("Player2wins");
    }
  }, [playerInputs]);

  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className="text-7xl text-indigo-400 font-bold">Tic Tac Toe</h1>

      <div className="cell-container grid grid-cols-3 w-fit mx-auto gap-2">
        {cellValue.map((value, index) => {
          return (
            <Cell
              value={value}
              key={index}
              onClick={() => onCellClick(index)}
            />
          );
        })}
      </div>

      <div className="current-player">Current Player : {currentPlayer}</div>
    </div>
  );
};

export default TicTacToeGame;
