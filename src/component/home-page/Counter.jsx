"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  memo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGameData } from "@/redux-store/features/gameDataSlice";
import { addUserShareData } from "@/redux-store/features/socketShareDatasSlice";
import GameTimer from "./GameTimer";

const Counter = memo(function Counter() {
  const dispatch = useDispatch();
  let wpmObj = useRef({});

  const [serverWpm, setServerWpm] = useState(0);
  const refServerWpm = useRef(serverWpm);
  const [speedTestTimer, setSpeedTestTimer] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const gameData = useSelector((state) => state.gamePlayData);
  // const roomPlsData = useSelector((state) => state.roomConnectedPlayersData);

  const {
    isRaceCompleted,
    gameEnd,
    rightText,
    wrongsLetters,
    orginalString,
    arrayOfwrittenWords,
    isCounting,
    isGameBeingPlayed,
  } = gameData;

  const getTimer = useCallback((seconds) => {
    setSpeedTestTimer(seconds);
  }, []);

  useEffect(() => {
    refServerWpm.current = serverWpm;
  }, [serverWpm]);

  useEffect(() => {
    if (arrayOfwrittenWords.length > 0) {
      setServerWpm(
        parseInt(
          ((arrayOfwrittenWords.length - 1) / parseInt(speedTestTimer)) * 60
        )
      );
    }
  }, [speedTestTimer, arrayOfwrittenWords]);

  useEffect(() => {
    if (!gameEnd) {
      wpmObj.current[speedTestTimer] = refServerWpm.current;
    }
  }, [speedTestTimer, gameEnd]);

  useEffect(() => {
    dispatch(
      addUserShareData({
        arrayOfwrittenWords: arrayOfwrittenWords,
      })
    );
  }, [arrayOfwrittenWords, speedTestTimer, dispatch]); //calculateWpm,

  useEffect(() => {
    if (isCounting) {
      setSpeedTestTimer(0); // Reset the timer
      dispatch(
        addUserShareData({
          wpm: 0,
          accuracy: 0,
          place: "",
        })
      );
      setAccuracy(0);
      wpmObj.current = {};
    }
  }, [isCounting, dispatch]); // Added all Gthe relevant set functions as dependencies

  useEffect(() => {
    if (isRaceCompleted) {
      let totalMistakes = 0;
      if (wrongsLetters?.length > 0) {
        wrongsLetters?.forEach((item) => {
          totalMistakes += item.mistakeLetters.length;
        });
      }

      const accuracyPercent = Math.floor(
        ((orginalString.length - totalMistakes) / orginalString.length) * 100
      );
      setAccuracy(accuracyPercent);

      dispatch(
        addUserShareData({
          accuracy: accuracyPercent,
          finishingTime: speedTestTimer,
          place: 1,
          isRaceCompleted: isRaceCompleted,
          arrayOfwrittenWords: arrayOfwrittenWords,
          wpm: serverWpm,
        })
      );

      dispatch(
        addGameData({
          wpmObj: wpmObj.current,
          wpm: serverWpm,
          givenString: orginalString,
          writenString: rightText,
          typeTime: speedTestTimer,
          accuracy: accuracyPercent,
          gameType: "normal",
          totalMistakes: totalMistakes,
          mistakesArray: wrongsLetters,
        })
      );
    }
  }, [isRaceCompleted, arrayOfwrittenWords, speedTestTimer, wpmObj, orginalString, wrongsLetters, serverWpm, rightText, dispatch]);

  return (
    <>
      <div className=" p-4 rounded-full shadow-md flex justify-center  items-center gap-x-5  mb-6">
        <span className="text-lg font-bold text-blue-500">
          WPM: {serverWpm}
        </span>
        <GameTimer
          getTimer={getTimer}
          isGameBeingPlayed={isGameBeingPlayed}
          isRaceCompleted={isRaceCompleted}
        />
        <div className="text-lg font-bold text-green-500">
          Accuracy: {accuracy}%
        </div>
      </div>
    </>
  );
});

export default Counter;
