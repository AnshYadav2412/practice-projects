import React from "react";
import PasswordChecker from "./pages/password-please/PasswordChecker";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import TicTacToeGame from "./pages/tic-tac-toe/pages/TicTacToeGame";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pass-checker" element={<PasswordChecker />} />
      <Route path="/tic-tac-toe" element={<TicTacToeGame />} />
    </Routes>
  );
};

export default App;
