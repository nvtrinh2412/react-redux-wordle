import React from 'react'
import "./key.scss"
import {useSelector,useDispatch} from "react-redux"
import { rootState } from '../../../common/interface'
import { setBoard , increasePosition} from '../../Board/boardSlice'
interface IProps{
  letter: string
}
const MAX_KEY = 30
const Key: React.FC<IProps> = (props) => {
  const {letter} = props;
  const board = useSelector((state:rootState)=> state.board.board);
  const position = useSelector((state:rootState) => state.board.position)
  const dispatch = useDispatch()
  const chooseLetter = () =>{
    if(position >= MAX_KEY) return;
    const newBoard = [...board]
    newBoard[position]= letter;

    dispatch(setBoard(newBoard))
    dispatch(increasePosition())
  }
  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  )
}

export default Key