"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Counter from "./Counter";
import CarRoad from "./CarRoad";
import RaceInput from "./RaceInput";
import MyLineChart from "./MyLineChart";
import { useDispatch } from "react-redux";
import { addGamePlayData } from "@/redux-store/features/gamePlaySlice";
import { cleanString, raceText } from "@/utils/serviceFunction";
const RaceGame = () => {
  const dispatch = useDispatch();
  // race-text
  const [currText, setCurrText] = useState("");
  const [gameEnd, setGameEnd] = useState(true);
  const [isRaceCompleted, setIsRaceCompleted] = useState(false);
  const [roomGameState, setRoomGameState] = useState("not-started");
  // to show speed or not or reset car
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [isGameBeingPlayed, setIsGameBeingPlayed] = useState(false);

  const gameEnder = useCallback((startingGameText, checkIsGameComplete) => {
    setGameEnd(true);
    setIsGameBeingPlayed(false);
    setIsRaceCompleted(checkIsGameComplete);
    setCurrText(startingGameText);
  }, []);

  const getCurrText = useCallback((text) => {
    setCurrText(text);
  }, []);
  const matchFoundHandler = () => {
    setIsGameBeingPlayed(false);
    const cleanedString = cleanString(raceText);
    gameEnder(cleanedString, false);
    setIsCounting(true);
    setCount(5);
  };
  const gameCompletedOrTimerEnded = () => {
    setGameEnd(true);
    gameEnder("Time UP", true);
    setIsGameBeingPlayed(false);
    setIsRaceCompleted(true);
    setRoomGameState("ended");
  };

  // gameCompletedOrTimerEnded(); do this when game time reaches it's limit or user written full text
  useEffect(() => {
    const countingCompletedHandler = () => {
      setIsCounting(false);
      setIsGameBeingPlayed(true);
      setGameEnd(false);
      setCount(0);
    };
    if (isCounting && count > 0) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (isCounting && count === 0) {
      countingCompletedHandler();
    }
  }, [count, isCounting]);
  useEffect(() => {
    dispatch(
      addGamePlayData({
        isCounting,
        isGameBeingPlayed,
        gameEnd,
        isRaceCompleted,
      })
    );
  }, [isCounting, isGameBeingPlayed, gameEnd, isRaceCompleted, dispatch]);

  return (
    <>
      <div className="max-w-screen-xl mx-auto bg-gray-900 text-white min-h-screen p-4 relative">
        <div
          className="  text-3xl text-center -mt-5 mb-3 font-semibold"
          id="title"
        >
          Typing Game
        </div>

        <CarRoad />
        <div
          className={`${
            count < 1 ? "hidden" : ""
          }   text-white bg-black  p-5 top-[3%] left-[47%] rounded-xl w-fit absolute
     text-4xl font-bold`}
        >
          {count}
        </div>

        <div className="text-center mt-8 text-3xl">
          <div
            htmlFor="text-container"
            id="text"
            dangerouslySetInnerHTML={{ __html: currText }}
            className="mb-4"
          ></div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <RaceInput
            gameEnd={gameEnd}
            gameEnder={gameEnder}
            getCurrText={getCurrText}
            isGameBeingPlayed={isGameBeingPlayed}
            isCounting={isCounting}
          />
          <Counter />
        </div>

        <button
          className="mt-2 p-3 px-5 text-[1.5rem] w-full bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={matchFoundHandler}
        >
          {isCounting || isGameBeingPlayed || roomGameState === "started"
            ? "Leave Game"
            : "Play New"}
        </button>

        {isRaceCompleted && <MyLineChart isRaceCompleted={isRaceCompleted} />}
      </div>
    </>
  );
};

export default RaceGame;
