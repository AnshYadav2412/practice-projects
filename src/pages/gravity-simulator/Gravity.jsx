import React, { useEffect, useRef, useState } from "react";
import createBall from "./utils/createBall";
import colorRandomizer from "./utils/colorRandomizer";

const Gravity = () => {
  const canvasRef = useRef(null);
  const [currentSpeed, setCurrentSpeed] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 1;
    const ctx = canvas.getContext("2d");
    const balls = [];

    function handleMouseClick(e) {
      const ball = createBall(e.clientX, e.clientY, 20, ctx, colorRandomizer());
      setCurrentSpeed({ x: Math.floor(ball.vx), y: Math.floor(ball.vy) });
      balls.push(ball);
    }

    let gravity = 0.5;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach((ball) => {
        ball.vy += gravity;
        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.y + ball.r > canvas.height) {
          ball.y = canvas.height - ball.r;
          ball.vy *= -0.7;
        } else if (ball.y + ball.r <= 0) {
          ball.y = 0 + ball.r;
          ball.vy *= -0.7;
        }

        if (ball.x + ball.r > canvas.width) {
          ball.x = canvas.width - ball.r;
          ball.vx *= -0.7;
        } else if (ball.x + ball.r <= 0) {
          ball.x = 0 + ball.r;
          ball.vx *= -0.7;
        }

        if (ball.y + ball.r === canvas.height) {
          ball.vx *= 0.9;
        }

        ball.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("mousedown", handleMouseClick);
    return () => window.removeEventListener("mousedown", handleMouseClick);
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>
      <div className="gravity-page relative w-screen h-screen flex justify-end">
        <div className="data-display px-10 mt-10 mr-10">
          <p>Initial Velocity in X : {currentSpeed.x}</p>
          <p>Initial Velocity in Y : {currentSpeed.y}</p>
        </div>
      </div>
    </div>
  );
};

export default Gravity;
