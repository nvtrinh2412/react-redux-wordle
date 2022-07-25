import React, { useState } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import Header from "./components/Heading/Heading";
import Keyboard from "./components/Keyboard/Keyboard";
import {useSelector} from "react-redux"
import { rootState } from "./common/interface";
function App() {
  const board = useSelector((state:rootState)=> state.board.board);
  return (
    <div className="App">
      <Header type="h1" text="Worddie" />
      <Header type="subtitle" text="Here is another Wordle" />
      <div className="board-container">
        <Board board={board} />
      </div>
      <div className="keyboard">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
