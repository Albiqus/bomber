import styled, { keyframes } from "styled-components";
import wall from '../../../images/textures/wall.jpg';
import barrier from '../../../images/textures/barrier.png';
import portal from '../../../images/textures/portal.gif';
import playerRight from '../../../images/entity/player-right.png';
import playerLeft from '../../../images/entity/player-left.png';
import { PlayerPropsType } from "../../../types/props/PlayerProps";
import { AnimationCoords } from "../../../types/AnimationCoords";


export const Div = styled.div`
height: 900px;
width: 900px;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
`

export const Chunk = styled.div`
width: 60px;
height: 60px;
`

export const Air = styled.div`
width: 60px;
height: 60px;
background-color: black;
`

export const Wall = styled.div`
width: 60px;
height: 60px;
background-image: url(${wall});
`

export const Barrier = styled.div`
width: 60px;
height: 60px;
background-image: url(${barrier});
`


export const Portal = styled.div`
width: 60px;
height: 60px;
background-image: url(${portal});
`

const moving = (coordinates: AnimationCoords) => keyframes`
  0% {
    transform: translate(${coordinates.x}%, ${coordinates.y}%);
  }
  100% {
   transform: translate(0, 0);
  }
`

export const Player = styled.div`
position: absolute;
width: 60px;
height: 60px;
background-image: url(${(props: PlayerPropsType) => props.gazeDirection === 'right' ? playerRight : playerLeft});
animation: ${(props: PlayerPropsType) => moving(props.coordinates)} 0.175s linear ;
`

export const Idph = styled.p`
position: absolute;
color: white;
opacity: 0.4;
`


