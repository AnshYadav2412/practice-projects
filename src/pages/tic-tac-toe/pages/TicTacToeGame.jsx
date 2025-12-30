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
  const [winner, setWinner] = useState(0);

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

    if (player1Wins) {
      setWinner("Player 1");
    } else if (player2Wins) {
      setWinner("Player 2");
    }
  }, [playerInputs]);

  return (
    <div className="flex flex-col items-center gap-20">
      <h1 className="text-7xl text-indigo-400 font-bold">Tic Tac Toe</h1>

      {!winner ? (
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
      ) : (
        <div className="winner flex flex-col gap-10">
          <h1 className="text-4xl ">{winner} Wins</h1>
          <div className="button bg-red-500 text-3xl rounded-2xl text-center px-8 py-4 hover:bg-red-400 border-3 border-blue-600">
            <a href="/tic-tac-toe">Restart</a>
          </div>
        </div>
      )}

      {!winner ? (
        <div className="current-player">
          Current Player : {currentPlayer + 1}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TicTacToeGame;
