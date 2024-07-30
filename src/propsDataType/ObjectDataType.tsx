import React from 'react'
type objectPropsType = {
    names:{
        FirstName:string,
        LastName:string
    }
};

export default function ObjectDataType(props:objectPropsType) {

  return (
    <>
    <div>FirstName : {props.names.FirstName}</div>
    <div>LastName : {props.names.LastName}</div>
    </>
  )
}
