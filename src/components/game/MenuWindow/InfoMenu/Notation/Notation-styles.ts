import styled from "styled-components";
import waller from '../../../../../images/entity/waller.png';
import electricity from '../../../../../images/entity/electricity.gif';


export const Div = styled.div`
    margin-top: 100px;
    width: 800px;
    height: auto;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    flex-wrap: wrap;
`


export const P = styled.p`
    text-decoration: underline;
    text-align: start;
    margin: 0 auto;
    width: 800px;
    margin: 20px 0px 0px 20px;
    font-family: "gameFont";
    font-size: 35px;
    color: white;
`

export const Description = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    margin-top: 50px;
    width: 400px;
    height: auto;
`

export const Name = styled.p`
    text-align: center;
    margin: 0;
    margin-top: 40px;
    width: 400px;
    font-family: "gameFont";
    font-size: 25px;
    height: 40px;
    color: white;
`

export const Images = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 50px;
    width: 400px;
    height: auto;
`

export const Waller = styled.div`
position: absolute;
top: 260px;
width: 60px;
height: 60px;
background-image: url(${waller});
`

export const Electricity = styled.div`
position: absolute;
right: -5px;
bottom: -5px;
width: 70px;
height: 70px;
background-image: url(${electricity});
`

export const Image = styled.img`
   margin-top: 20px;
width: 60px;
height: 60px;
`
