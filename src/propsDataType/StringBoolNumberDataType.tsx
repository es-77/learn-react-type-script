import React from 'react'

type propType = {
    name:string,
    count:number,
    isLogin:boolean
}

export default function StringBoolNumberDataType(props:propType) {
  return (
    <>
        <div>name ; {props.name}</div>
        <div>count ; {props.count}</div>
        <div>isLogin ; {props.isLogin}</div>
    </>
  )
}
