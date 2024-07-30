import React from 'react'
import ButtonEventPass from './ButtonEventPass'

function ButtonEventTypeIndex() {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        console.log('Handle click called', id);
      };
  return (
    <>
        <div>ButtonEventTypeIndex</div>
        <ButtonEventPass handleClick={handleClick}/>
    </>
  )
}

export default ButtonEventTypeIndex