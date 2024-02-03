"use client";

import { useEffect, useState, memo } from "react";

const GameTimer = memo(function GameTimer({
  getTimer,
  isGameBeingPlayed,
  isRaceCompleted,
}) {
  const [gameTimer, setGameTimer] = useState(200);

  const startTimer = () => {
    setInterval(() => {
      setGameTimer((count) => count - 1);
    }, 1000);
  };

  useEffect(() => {
    if (isGameBeingPlayed) {
      startTimer();
    }
  }, [isGameBeingPlayed]);

  useEffect(() => {
    if (!isRaceCompleted && isGameBeingPlayed) {
      getTimer(200 - gameTimer);
    }
  }, [getTimer, isRaceCompleted, gameTimer, isGameBeingPlayed]);

  return (
    <div className="flex justify-between">
      <div
        style={{
          color: gameTimer < 10 && isGameBeingPlayed ? "red" : "white",
        }}
        className="text-lg font-bold  "
      >
        Seconds: {gameTimer}
      </div>
    </div>
  );
});

export default GameTimer;
