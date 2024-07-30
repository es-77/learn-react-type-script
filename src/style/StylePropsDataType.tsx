import React from 'react'
type styleProps = {
    style:React.CSSProperties
}

export default function StylePropsDataType(props:styleProps) {
  return (
    <div style={props.style}>StylePropsDataType</div>
  )
}
