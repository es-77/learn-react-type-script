import React from 'react'
type optionalDataTypeProp = {
    name:string,
    isAnyMessage?:boolean
}

export default function OptionalDataType(props:optionalDataTypeProp) {
  return (
    <>
        <div>name :  {props.name}</div>
        <div>isAnyMessage :  {props.isAnyMessage ?? 'no message'}</div>
    </>
  )
}
