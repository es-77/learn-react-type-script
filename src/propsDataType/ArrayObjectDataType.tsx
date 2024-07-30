import React from 'react'

type arrayOfObjectPropsType = {
    arrayOfObject:{
        FirstName:string,
        LastName:string
    }[]
}

function ArrayObjectDataType(props:arrayOfObjectPropsType) {
  return (
    <>
    {props.arrayOfObject.map((value)=>{
        return <div>FirstName :  {value.FirstName} LastName :  {value.LastName}</div>
    })}
    </>
  )
}

export default ArrayObjectDataType