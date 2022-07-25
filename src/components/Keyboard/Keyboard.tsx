import React from "react";
import Key from "./Key/Key";
import "./keyboard.scss";
import {useSelector,useDispatch} from "react-redux"
import { rootState } from '../../common/interface'
import { setBoard , decreasePosition} from '../Board/boardSlice'
const Keyboard: React.FC = () => {
const position = useSelector((state:rootState)=> state.board.position)
const board = useSelector((state:rootState)=> state.board.board)
const dispatch = useDispatch()
  const row: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const clickBack = () =>{
    if(position <= 0) return;
    const newBoard = [...board]
    newBoard[position-1] = "";
    dispatch(decreasePosition())
    dispatch(setBoard(newBoard))
  }
  return (
    <div className="keyboard-container">
      {row.map((row, idx) => {
        return (
          <div className="row">
            {idx === 2 && <span className="letter-row">Enter</span>}
            {row.split(" ").map((letter, idx) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
