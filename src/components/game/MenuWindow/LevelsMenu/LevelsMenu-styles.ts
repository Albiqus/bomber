import styled from 'styled-components'
import { LevelItemProps } from '../../../../types/props/LevelItemProps'
import wallpaper from '../../../../images/wallpapers/menu.gif'
import back_button from '../../../../images/back-button.png'


export const Div = styled.div`
    position: relative;
    width: 900px;
    height: 900px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-image: url(${wallpaper});
    align-content: center;
    align-items: center;
`

export const P = styled.p`
    text-align: center;
    padding-left: 200px;
    margin: 0 auto;
    margin-top: 55px;
    font-family: "gameFont";
    font-size: 35px;
    color: white;
`

export const BackButton = styled.button`
    position: absolute;
    left: 25px;
    top: 25px;
    font-family: "gameFont";
    font-size: 120px;
    width: 200px;
    height: 100px;
    color: white;
    background-image: url(${back_button});
    background-color: rgba(0,0,0,0);
    border: none;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`

export const LevelsWrapper = styled.div`
margin-top: 95px;
height: 400px;
padding: 0px 20px 0px 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-content: space-around;
`

export const LevelItem = styled.div`
display: flex;
width: 156px;
height: 156px;
background: linear-gradient(pink, blueviolet);
outline: ${(props: LevelItemProps) => props.id === +props.levelSelected && props.isAccess && '7px solid white'};
&:hover{
    cursor: pointer;
    outline: ${(props: LevelItemProps) => props.isAccess && '7px solid white'};
}
`

export const Lock = styled.img`
transform: scale(0.4);
`

export const StartButton = styled.button`
    font-family: "gameFont";
    font-size: 60px;
    width: 600px;
    height: 150px;
    color: white;
    border: 5px solid white;
      background-color: rgba(0,0,0,0.5);
      margin-top: 50px;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`

export const LevelPrewiew = styled.img`
outline: 3px solid pink
`