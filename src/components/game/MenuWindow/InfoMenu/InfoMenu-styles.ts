import styled from "styled-components";
import wallpaper from '../../../../images/wallpapers/menu.gif'
import back_button from '../../../../images/back-button.png'


export const Div = styled.div`
    position: relative;
    width: 900px;
    height: 900px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background-image: url(${wallpaper});
    align-content: center;
    align-items: center;
    &::-webkit-scrollbar {
    width: 5px;
    }
    &::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0);
    }
    &::-webkit-scrollbar-thumb {
    background: white;
}
`

export const P = styled.p`
    text-align: center;
    padding-left: 200px;
    margin: 0 auto;
    margin-top: 55px;
    font-family: "gameFont";
    font-size: 45px;
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
