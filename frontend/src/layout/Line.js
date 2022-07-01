//Essentials
import React from 'react'

function Line(props) {
    const lineStyle={
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
    }
  return (
    <span style={lineStyle}></span>
  )
}

export default Line