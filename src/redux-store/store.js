import { configureStore } from "@reduxjs/toolkit";
import gameDataSlice from "./features/gameDataSlice";
import socketShareDatasSlice from "./features/socketShareDatasSlice";
import gamePlaySlice from "./features/gamePlaySlice";
import userProfileSlice from "./features/userProfileSlice";

const store = configureStore({
  reducer: {
    gameData: gameDataSlice,
    socketSharedData: socketShareDatasSlice,
    gamePlayData: gamePlaySlice,
    userProfileData: userProfileSlice,
  },
});

export default store;
