//Essentials
import React from 'react'

function Title(props) {
    const titleStyle = {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 'bold',
        fontSize: props.fontSize,
        color: props.color,
    }
  return (
    <h1 style={titleStyle}>{props.title}</h1>
  )
}

export default Title
