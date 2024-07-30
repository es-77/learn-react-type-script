import React from 'react'
type bComponetProps = {
    children:React.ReactNode
}
function BComponet(props:bComponetProps) {
  return (
    <>
        <div>BComponet</div>
        {props.children}
    </>
  )
}

export default BComponet