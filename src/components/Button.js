import React from 'react'
import { styled } from 'styled-components'
function Button(props) {

    const colorPreset=(str="white")=> {
        if(str==="green"){
          return{
            color:"#11FD71",
            clicked:"#00DB50",
            font:"#00BA0C",
          }
        }else if(str==="red"){
          return{
            color:"#EE5D4B",
            clicked:"#DD4C3A",
            font:"#F40800",
          }
        }else if(str==="white"){
          return{
            color:"#FFFFFF",
            clicked:"#DDDDDD",
            font:"#000000"
          }
        }
    }
    const borderColorPreset = (str="none") =>{
      if(str==="none"){
        return "border:none;"
      }
      else if(str==="green"){
        return "border:1px soild; border-color:#11FD71; "
      }
      else if(str==="red"){
        return"border:1px soild; border-color: #EE5D4B;"
      }
    }
    const StButton = styled.button`
    margin:0;
    background-color:${colorPreset(props.color).color};
    ${borderColorPreset(props.borderColor)};
    cursor: pointer;
    font-weight: bold;
    font-family: "Noto Sans KR", Courier New;
    padding: ${`${props.size}px`};
    border-radius: 5px;
    color: ${colorPreset(props.color).font};

    &:active{
      background:${colorPreset(props.color).clicked};
    }
    `;
  return (
    <StButton onClick={props.func} size={props.size} borderColor={props.borderColor} color={props.size}>{props.title}</StButton>
  )
}


export default Button