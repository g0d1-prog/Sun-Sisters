//Essentials
import React from 'react'

function Article(props) {
    const articleStyle = {
        fontFamily:"'Roboto', sans-serif",
        fontWeight:props.fontWeight,
        fontStyle: props.fontStyle,
        fontSize: props.fontSize,
        color: props.color,
        backgroundColor:props.backgroundColor,
        boxShadow:props.boxShadow, //This property is to make the article look like a neon element
    }

  return (
    <p><span style={articleStyle}>{props.article}</span></p>
    // Span is inside of the paragraph element because of the backgroundColor property to work only on the text, and not on the textarea
  )
}

export default Article