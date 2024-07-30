import React from 'react'
import InputEventPassDataType from './InputEventPassDataType'

function InputEventTypeIndex() {
    const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log('handle input change ',event.target.value)
    }
  return (
    <>
        <div>InputEventTypeIndex</div>
        <InputEventPassDataType handleOnChange={handleOnChange}/>
    </>
  )
}

export default InputEventTypeIndex