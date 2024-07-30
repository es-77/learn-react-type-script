import React from 'react'

type inputEventPassProps = {
    value?:string,
    handleOnChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

function InputEventPassDataType(props:inputEventPassProps) {
  return (
    <>
        <div>InputEventPassDataType</div>
        <input type="text" name="name" id="name"  value={props.value} onChange={props.handleOnChange}/>
    </>
  )
}

export default InputEventPassDataType