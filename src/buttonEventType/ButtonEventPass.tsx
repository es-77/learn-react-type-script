import React from 'react'

type buttonEventProps = {
    handleClick:(Event:React.MouseEvent<HTMLButtonElement>,id:number)=>void,
}

export default function ButtonEventPass(props:buttonEventProps) {
  return (
    <>
        <div>ButtonEventPass</div>
        <button onClick={(event)=> props.handleClick(event,12)}> click me </button>
    </>
  )
}
