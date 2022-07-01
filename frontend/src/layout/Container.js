//Essentials 
import React from 'react'

export default function Container(props) {
    const container_style = {
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        display: props.display,
        flexDirection: props.flexDirection,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        textAlign: 'center',
        backgroundImage: `url('${props.backgroundImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: props.backgroundSize,
        backgroundPosition: props.backgroundPosition,
        padding: props.padding, //Padding only have to exists if it doesn't have a width defined or if it is inside a container
        paddingTop: props.paddingTop, //Padding only have to exists if it doesn't have a width defined or if it is inside a container
        paddingBottom: props.paddingBottom, //Padding only have to exists if it doesn't have a width defined or if it is inside a container
        paddingLeft: props.paddingLeft, //Padding only have to exists if it doesn't have a width defined or if it is inside a container
        paddingRight: props.paddingRight, //Padding only have to exists if it doesn't have a width defined or if it is inside a container
        gap: props.gap,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft, //Margin Left only have to exists if it doesn't have a width defined
        marginRight: props.marginRight, //Margin Right only have to exists if it doesn't have a width defined
        flexWrap:props.flexWrap, //For flex displays
        borderRadius:props.borderRadius,
        gridTemplateColumns: props.gridTemplateColumns,//For grid displays
        gridTemplateRows: props.gridTemplateRows, // For grid displays
    }
  return (
    <div data-aos={props.dataAos} style={container_style}>
        {props.children}
    </div>
  )
}
