import React, { useState, useEffect, useRef, use } from "react";
import orng from "../../public/orange.svg";
import obs from "../../public/obs.svg";
import { Link } from "react-router-dom";

const DinoGame = ({ className }) => {
  const [isJumping, setIsJumping] = useState(false);
  const [dinoPositionX, setDinoPositionX] = useState(
    300 - (window.innerWidth < 700 ? 250 : 0)
  );
  const [dinoPositionY, setDinoPositionY] = useState(0);
  const [obstaclePosition, setObstaclePosition] = useState(
    800 - (window.innerWidth < 700 ? 350 : 0)
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const [ripples, setRipples] = useState([]);
  const orgWidth = 50;
  const obstacleWidth = 25;
  const gameInterval = useRef(null);
  const highscore = useRef(0);
  const currentScore = useRef(0);
  const speedOrg = useRef(15);

  useEffect(() => {
    startGame();

    document.addEventListener("keydown", (e) => {
      if (e.key === "space") {
        handleJump(e);
      }
    });
  }, []);

  const levelup = () => {
    speedOrg.current = Math.max(6, speedOrg.current - 0.45);
    currentScore.current += 10;
    if (currentScore.current > highscore.current) {
      highscore.current = currentScore.current;
    }
    clearInterval(gameInterval.current);
    startGame();
    return 700 + Math.random() * 300;
  };

  const startGame = () => {
    gameInterval.current = setInterval(() => {
      setObstaclePosition((prev) => (prev > 0 ? prev - 5 : levelup()));
    }, speedOrg.current);
    return () => clearInterval(gameInterval.current);
  };

  useEffect(() => {
    if (
      obstaclePosition < dinoPositionX + orgWidth &&
      obstaclePosition + obstacleWidth > dinoPositionX &&
      dinoPositionY === 0
    ) {
      endGame();
    }
  }, [obstaclePosition, dinoPositionY]);

  const endGame = () => {
    speedOrg.current = 15;
    currentScore.current = 0;
    setIsGameOver(true);
    clearInterval(gameInterval.current);
  };

  const handleJump = (e) => {
    if (!isJumping) {
      setIsJumping(true);
      setDinoPositionY(40);
      setTimeout(() => {
        setDinoPositionY(0);
        setIsJumping(false);
      }, 500);
    }
    const x = e.clientX;
    const y = e.clientY;
    const newRipple = { id: Date.now(), x, y };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((r) => r.id !== newRipple.id)
      );
    }, 600);
  };

  const restartGame = () => {
    setIsGameOver(false);
    setObstaclePosition(800 - (window.innerWidth < 700 ? 250 : 0));
    setDinoPositionX(300 - (window.innerWidth < 700 ? 250 : 0));
    startGame();
  };

  return (
    <div
      onClick={handleJump}
      className="w-full h-screen p-3 gap-5 md:p-0 flex select-none flex-col justify-center items-center relative cursor-crosshair text-white overflow-hidden"
    >
      {/* Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-10 h-10 rounded-full animate-ripple"
          style={{
            left: `${ripple.x - 25}px `,
            top: `${ripple.y - 25}px `,
          }}
        />
      ))}

      <div className="flex w-[70%] flex-wrap m-5 gap-5 justify-between">
        <div className="flex gap-6">
          <Link
            className="text-[rgb(255,255,255)] text-[2rem] logoNav"
            to="/mini-game"
          >
            आ<span className="accent">1.</span>
          </Link>

          <Link className="w-full md:w-fit" to="/">
            <button className="text-white text-lg md:text-[1.4rem] w-full md:w-fit border-2 p-2 transition-all duration-300 rounded-sm hover:text-black hover:font-semibold hover:bg-[rgb(255,190,71)]">
              HOME
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-5 text-center">
          <p className="text-center">High Score: {highscore.current}</p>
          <p className="text-center">Current Score: {currentScore.current}</p>
        </div>
      </div>

      <div className="w-full h-[40%] md:w-[70%] md:h-[30%] relative overflow-hidden p-1 border border-white game">
        <img
          className="animate-spin transition-all duration-200 ease-in-out"
          src={orng}
          style={{
            width: `${orgWidth}px`,
            height: "40px",
            position: "absolute",
            bottom: `${dinoPositionY}px`,
            left: `${dinoPositionX}px`,
          }}
        />

        <img
          className="obstacle object-scale-down relative animate-spin"
          src={obs}
          style={{
            rotate: "180deg",
            width: `${obstacleWidth}px`,
            height: "40px",
            position: "absolute",
            bottom: "0",
            left: `${obstaclePosition}px`,
          }}
        />
      </div>

      {isGameOver && (
        <div className="flex flex-col justify-center md:w-fit w-full relative md:absolute bg-[#000000e7] backdrop-blur-[2px] items-center gap-3 p-4 border-2 border-white">
          <p className="text-2xl">Orange is killed :(</p>
          <p>Highscore: {highscore.current}</p>
          <p>CurrentScore: {currentScore.current}</p>

          <button
            className="px-6 py-2 rounded-sm border-2 font-semibold hover:text-white hover:bg-[#1c1c1c] transition-all bg-[rgb(255,190,71)] text-black"
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default DinoGame;
