import React, { useEffect, useState } from "react";
import "./square.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../../../common/interface";
interface IProps {
  val: string;
  squareIdx: number;
}
const Square: React.FC<IProps> = (props) => {
  const { val, squareIdx } = props;

  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const currentReduxPosition = useSelector(
    (state: rootState) => state.board.position
  );
  const reduxRow = useSelector((state: rootState) => state.board.row);

  const currentRow = Math.floor((squareIdx) / 5);

  const currentPosition = (currentReduxPosition - 1) % 5; // position in current row

  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };
  useEffect(() => {
    console.log("correct: " + correctWord);
    console.log(currentPosition);
    if (correctWord[currentPosition] === val) {
      setCorrect(true);
      console.log("true");
    } else if (!correct && val !== "" && correctWord.includes(val)) {
      setAlmost(true);
      console.log("almost");

    } else if (!correct && val !== "" && !correctWord.includes(val)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [val]);
  const status: any =
    reduxRow > currentRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className="square" id={status}>
        {val}
      </div>
    </motion.div>
  );
};

export default Square;
