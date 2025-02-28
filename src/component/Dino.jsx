import React, { useState, useEffect, useRef } from "react";
import orng from "../../public/orange.svg";
import obs from "../../public/obs.svg";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";
const DinoGame = ({ className }) => {
  const [isJumping, setIsJumping] = useState(false);
  const [dinoPositionX, setDinoPositionX] = useState(300);
  const [dinoPositionY, setDinoPositionY] = useState(0);
  const [obstaclePosition, setObstaclePosition] = useState(400);
  const [isGameOver, setIsGameOver] = useState(false);
  const dinoWidth = 50;
  const obstacleWidth = 20;
  const gameInterval = useRef(null);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    gameInterval.current = setInterval(() => {
      setObstaclePosition((prev) => (prev > 0 ? prev - 5 : 800));
    }, 30);
    return () => clearInterval(gameInterval.current);
  };

  useEffect(() => {
    if (
      obstaclePosition < dinoPositionX + dinoWidth &&
      obstaclePosition + obstacleWidth > dinoPositionX &&
      dinoPositionY === 0
    ) {
      endGame();
    }
  }, [obstaclePosition, dinoPositionY]);

  const endGame = () => {
    setIsGameOver(true);

    clearInterval(gameInterval.current);
  };

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setDinoPositionY(50);
      setTimeout(() => {
        setDinoPositionY(0);
        setIsJumping(false);
      }, 700);
    }
  };

  const restartGame = () => {
    setIsGameOver(false);
    setObstaclePosition(800)
    setDinoPositionX(300)
    startGame();
  };

  return (
    <div onClick={handleJump} className="w-full h-screen flex justify-center items-center relative cursor-crosshair text-white">
      <span className="w-[70%] h-[70%] absolute p-3 top-0">highscore: </span>
      <video src={'../../public/bgVid.mp4'} className="w-[70%] h-[70%] absolute p-3 border border-white game" />
      <div className="w-[70%] h-[30%] p-3 border border-white game"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "transparent",
        }}
  
      >
        <Link to="/"><button className='  absolute text-[rgb(255,255,255)] text-[1.4rem] outline p-3 m-10 transition-all duration-300 rounded-sm hover:text-[black] hover:font-bold hover:bg-[rgb(255,190,71)]'>HOME</button></Link>
        <img
          className="animate-spin transition-all duration-500 ease-in-out"
          src={orng}
          style={{
            width: `${dinoWidth}px`,
            height: "40px",

            position: "absolute",
            bottom: `${dinoPositionY}px`,
            left: `${dinoPositionX}px`,
          }}
        ></img>


        <img
          className=" object-scale-down animate-spin"

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


        {isGameOver && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              padding: "1rem",
              border: "2px solid white",
            }}
          >
            <p>Orange is killed :(</p>
            <button onClick={restartGame}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DinoGame;
