import React, { useState } from "react";
import Board from "../Board/Board";
import "./Game.css";
import { culculateWinner } from "../../helper";
const Game = () => {
  const [board, setBoard] = useState(Array(25).fill(null));
  const [xIsNext, setXIsNet] = useState(true);
  const winner = culculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    // определяем был ли клик по ячейке или игра закончена
    if (winner || boardCopy[index]) return;
    //определить чей ход X & O
    boardCopy[index] = xIsNext ? "X" : "O";
    //Обновить наш стейт
    setBoard(boardCopy);
    setXIsNet(!xIsNext);
  };
  const startNewGame = () => {
    return (
      <button
        className="start-btn"
        onClick={() => setBoard(Array(25).fill(null))}
      >
        Очистить поле
      </button>
    );
  };
  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className="game-info">
        {winner
          ? "Победитель:" + winner
          : "Сейчас ходит:" + (xIsNext ? "X" : "O")}
      </p>
    </div>
  );
};

export default Game;
