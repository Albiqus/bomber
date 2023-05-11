import styled, { keyframes } from 'styled-components'
import wallpaper from '../../../images/background/menu.gif'


const appearance = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Div = styled.div`
    width: 900px;
    height: 900px;
    background-image: url(${wallpaper});
    animation: 1s ${appearance} ease-out;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
`

export const StartButton = styled.button`
    font-family: "gameFont";
    font-size: 60px;
    width: 600px;
    height: 150px;
    color: white;
    border: 5px solid white;
      background-color: rgba(0,0,0,0.5);
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`

export const InfoButton = styled.button`
    font-family: "gameFont";
    font-size: 60px;
    width: 600px;
    height: 150px;
    color: white;
    border: 5px solid white;
    background-color: rgba(0,0,0,0.5);
    margin-top: 30px;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`

export const P = styled.p`
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    font-family: "gameFont";
    font-size: 30px;
    color: white;
`

export const VolumeInput = styled.input`
    width: 600px;
    margin-top: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::-webkit-slider-thumb {
    background: #ecf0f1;
    border: 5px solid white;
    background-color: black;
    cursor: pointer;
    width: 15px;
    height: 15px;
    transform: scaleY(3);
    -webkit-appearance: none;
}
&::-webkit-slider-runnable-track {
    height: 15px;
    outline: 5px solid white;
    background-color: black
}
`