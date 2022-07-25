import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  board: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  position: 0,
}
export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload
    },
    increasePosition: (state) => {
      state.position = state.position + 1
    },
    decreasePosition: (state) => {
      state.position = state.position - 1
    }
  }
});

export const { setBoard, increasePosition,decreasePosition} = boardSlice.actions;
export default boardSlice.reducer
