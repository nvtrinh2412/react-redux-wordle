import { createSlice } from "@reduxjs/toolkit"
const wordList = require("../../common/words.json")
const random = Math.floor(Math.random()*wordList.words.length)
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
  correctWord: wordList.words[random].toUpperCase()
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

  }
});

export const { setBoard, increasePosition, decreasePosition, increaseRow } = boardSlice.actions;
export default boardSlice.reducer
