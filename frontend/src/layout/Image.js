//Essentials
import React from 'react'

function Image(props) {
    const imageStyle = {
        height:props.height,
        width: props.width,
        borderRadius: props.borderRadius,
        transform:props.transform //Property only to the element flower around to be around of Renata's image
    }
  return (
    <img data-aos={props.dataAos}src={props.src} alt={props.alt} style={imageStyle}></img>
  )
}

export default Image