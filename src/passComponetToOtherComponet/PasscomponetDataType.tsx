import React from 'react'
import BComponet from './BComponet'
import AComponet from './AComponet'

function PasscomponetDataType() {
  return (
    <>
        <div>PasscomponetDataType</div>
        <BComponet children={<AComponet/>} />
    
    </>
  )
}

export default PasscomponetDataType