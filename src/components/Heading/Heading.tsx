import React from 'react'
import "./heading.scss"
interface IProps {
  type: string,
  text: string
}
const Header : React.FC<IProps> = (props) => {
  const {text,type} = props
  return (
    <p className={`heading-${type}`}>
      {text}
    </p>
  )
}

export default Header