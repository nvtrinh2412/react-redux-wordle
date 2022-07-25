interface boardState{
  board: string[],
  position: number
}

export interface rootState{
  board: boardState
}