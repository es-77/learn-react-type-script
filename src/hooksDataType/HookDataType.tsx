import React from 'react'
import ContextHookDataTypeIndex from './contextHookDataType/ContextHookDataTypeIndex'
import ReducerHookDataTypeIndex from './reducerHookDataType/ReducerHookDataTypeIndex'
import RefHookDataTypeIndex from './refHookDataType/RefHookDataTypeIndex'
import StateHookDataTypeIndex from './stateHookDataType/StateHookDataTypeIndex'

function HookDataType() {
    
  return (
    <>
        <div>HookDataType</div>
        <ContextHookDataTypeIndex/>
        <ReducerHookDataTypeIndex/>
        <RefHookDataTypeIndex/>
        <StateHookDataTypeIndex/>
    </>
  )
}

export default HookDataType