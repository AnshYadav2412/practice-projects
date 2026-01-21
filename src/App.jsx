import React from "react";
import PasswordChecker from "./pages/password-please/PasswordChecker";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import TicTacToeGame from "./pages/tic-tac-toe/pages/TicTacToeGame";
import Gravity from "./pages/gravity-simulator/Gravity";
import ContextApp from "./pages/context-api/ContextApp";
import CollatzApp from "./pages/collatz-conjecture/CollatzApp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pass-checker" element={<PasswordChecker />} />
      <Route path="/tic-tac-toe" element={<TicTacToeGame />} />
      <Route path="/gravity-sim" element={<Gravity />} />
      <Route path="/context-api" element={<ContextApp />} />
      <Route path="/collatz-conjecture" element={<CollatzApp />} />
    </Routes>
  );
};

export default App;
