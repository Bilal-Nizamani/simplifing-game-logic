import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const AllRoomPlayersScoreBoard = () => {
  const Mydata = useSelector((state) => state.userSocketSharedData);

  return (
    <div className="bg-gray-900 text-white m-4 p-4">
      <h2 className="text-2xl font-semibold mb-4">Player Scoreboard</h2>
      <div
        key={index}
        className=" bg-gray-900  justify-center rounded-lg shadow-sm shadow-white p-4 mb-4 sm:flex"
      >
        <div className="sm:w-1/4 sm:mr-4">
          {/* User's Car Image */}
          <div
            style={{ boxShadow: "0px 0px 10px 5px #3B82F6" }}
            className="flex bg-gray-900 rounded-lg flex-col justify-center m-auto text-center items-center "
          >
            <h3 className="text-lg w-full p-2 mb-2 sm:mb-0">
              {Mydata.userName}
            </h3>
            <Image
              width={60}
              height={60}
              src={`/${Mydata.car}.png`}
              alt={`Car Image ${Mydata.car}`}
              className="w-16  h-16  mx-auto"
            />
          </div>
        </div>
        <div className="flex-1 text-center">
          {/* User Information */}
          <p>
            <strong>Accuracy:</strong>
            <br /> {Mydata.accuracy}%
          </p>
          <p>
            <strong>Finishing Time:</strong>
            <br />
            {Mydata.finishingTime} seconds
          </p>
        </div>
        <div className="flex-1 text-center">
          <p>
            <strong>Place:</strong>
            <br /> {Mydata.place}st
          </p>
          <p>
            <strong>
              Words Per Minute (WPM):
              <br />
            </strong>{" "}
            {Mydata.wpm}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllRoomPlayersScoreBoard;
