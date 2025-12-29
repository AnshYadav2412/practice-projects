import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-4xl">Hey there, These are my projects</h1>

      <ul className="project-container flex flex-col text-2xl gap-2 list-disc text-amber-400">
        <li>
          {" "}
          <a href="/pass-checker" className="text-blue-400">
            Pass Checker
          </a>
        </li>
        <li>
          <a href="/tic-tac-toe" className="text-blue-400">
            Tic-Tac-Toe
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
