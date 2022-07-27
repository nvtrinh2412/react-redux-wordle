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
  row: 0,
  key: ""
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
    },
    increaseRow: (state) => {
      state.row++
    },
    setKey: (state, action) => {
      state.key = action.payload
    }
  }
});

export const { setBoard, increasePosition, decreasePosition, increaseRow, setKey } = boardSlice.actions;
export default boardSlice.reducer
