//Essentials
import React from 'react'

function Subtitle(props) {
    const subtitleStyle={
        fontFamily: "'PT Sans', sans-serif",
        fontWeight: props.fontWeight,
        fontSize: props.fontSize,
        color: props.color,
    }
  return (
    <h2 style={subtitleStyle}>{props.subtitle}</h2>
  )
}

export default Subtitle