import { configureStore } from '@reduxjs/toolkit'
import boardReducer from "../components/Board/boardSlice"
const  store = configureStore({
  reducer: {
    board: boardReducer
  }
});

export default store