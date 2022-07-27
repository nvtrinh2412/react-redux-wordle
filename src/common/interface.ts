interface boardState{
  board: string[],
  position: number,
  row: number,
  key: string
}

export interface rootState{
  board: boardState
}