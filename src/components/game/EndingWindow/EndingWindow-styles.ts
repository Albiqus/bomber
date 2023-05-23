import styled, { keyframes } from "styled-components";
import player from '../../../images/wallpapers/player-loss.png'
import wallpaper from '../../../images/wallpapers/menu.gif'


export const Div = styled.div`
    position: relative;
    width: 900px;
    height: 900px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
     background-image: url(${wallpaper});
`


export const P = styled.p`
    text-align: center;
    margin: 0;
    padding-top: 50px;
    padding-bottom: 50px;
    width: 800px;
    margin: 20px 0px 0px 20px;
    font-family: "gameFont";
    font-size: 40px;
    color: white;
`

export const Description = styled.p`
    width: 800px;
    margin: 0 auto;
    text-align: center;
    line-height: 1.5;
    font-family: "gameFont";
    font-size: 25px;
    color: white;
`

const animation = keyframes`
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
`

export const Player = styled.div`
    z-index: 1;
    position: absolute;
    left: 250px;
    top: 250px;
    background-image: url(${player});
    width: 400px;
    height: 400px;
    animation: ${animation} 20s infinite linear;
`

export const MenuButton = styled.button`
    z-index: 2;
    font-family: "gameFont";
    font-size: 60px;
    width: 600px;
    height: 150px;
    color: white;
    border: 5px solid white;
    background-color: rgba(0,0,0,0.5);
    margin-top: 425px;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`