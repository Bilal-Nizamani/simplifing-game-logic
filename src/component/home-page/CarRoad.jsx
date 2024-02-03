"use client";
import React, { memo, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addUserShareData } from "@/redux-store/features/socketShareDatasSlice";
import Image from "next/image";

const CarRoad = memo(function CarRoad() {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.socketSharedData);
  const gameData = useSelector((state) => state.gamePlayData);
  const myProfileData = useSelector((state) => state.userProfileData);
  const { arrayOfwrittenWords, orginalString } = gameData;
  const { car } = myProfileData;

  useEffect(() => {
    const writtenTextPercent =
      (arrayOfwrittenWords?.length * 100) / orginalString?.split(" ").length;

    if (writtenTextPercent > 0) {
      dispatch(addUserShareData({ carPosition: writtenTextPercent / 100 }));
    }
  }, [dispatch, arrayOfwrittenWords, orginalString]);

  return (
    <div
      style={{ height: 80 }}
      className=" flex justify-around gap-3 pb-1 transform  transition-transform bg-gray-700  flex-col shadow-t-md shadow-md shadow-white "
    >
      <div className="h-3  w-full mt-10 pl-[100px]  bg-slate-300  transform -translate-y-1/2">
        <div
          style={{
            marginLeft: `calc(${myData.carPosition * 100}% - 85px)`,
          }}
          className=" w-16  transition-all duration-300 ease-in-out"
        >
          <div className="mt-[-3rem]">
            <Image width={100} height={100} src={`/${car}.png`} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default CarRoad;
