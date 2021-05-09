import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
export const Speed = () => {
    return (

            
         
  <ReactSpeedometer
    value={333}
    needleColor="steelblue"
    needleTransitionDuration={4000}
    needleTransition="easeSinInOut"
    needleHeightRatio={1}
    currentValueText=" #{value} Gbps"
    startColor="#64dcc1"
    endColor="red"
    currentValuePlaceholderStyle={'#{value}'}
    textColor={"#AAA"}
    maxValue={100}
    minValue={0}
    value={98}
  />

       
    )
}
