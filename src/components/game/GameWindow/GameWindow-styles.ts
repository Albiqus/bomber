import styled, { keyframes } from "styled-components";
import wall from '../../../images/textures/wall.jpg';
import barrier from '../../../images/textures/barrier.png';
import portal from '../../../images/textures/portal.gif';
import playerRight from '../../../images/entity/player-right.png';
import playerLeft from '../../../images/entity/player-left.png';
import bomb from '../../../images/entity/bomb.png';
import waller from '../../../images/entity/waller.png';
import electricity from '../../../images/entity/electricity.gif'
import { PlayerPropsType } from "../../../types/props/PlayerProps";
import { AnimCoords } from "../../../types/AnimCoords";
import { BombPos } from "../../../types/props/AirProps";
import { WallerProps } from "../../../types/props/WallerProps";


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

const bombAnimation = keyframes`
  0% {
    transform: scale(0.7, 0.7);
  }
  50%{
    transform: scale(1, 1);
  }
  100% {
   transform: scale(0.7, 0.7);
  }
`

export const Air = styled.div`
width: 60px;
height: 60px;
background-color: ${(props: BombPos) => props.bombPos !== props.airPos && 'black'};
background-image: url(${(props: BombPos) => props.bombPos === props.airPos && bomb});
animation: ${(props: BombPos) => props.bombPos === props.airPos && bombAnimation} 0.5s infinite;
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

const moving = (animCoords: AnimCoords) => keyframes`
  0% {
    transform: translate(${animCoords.x}%, ${animCoords.y}%);
  }
  100% {
   transform: translate(0, 0);
  }
`

const death = keyframes`
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
`

const finish = keyframes`
    0% {

    }
    20%{
        transform: scale(1.4);
    }
    100% {
        transform: scale(0);
    }
`

export const Player = styled.div`
position: absolute;
width: 60px;
height: 60px;
background-image: url(${(props: PlayerPropsType) => props.gazeDirection === 'right' ? playerRight : playerLeft});
animation: ${(props: PlayerPropsType) => moving(props.animCoords)} 0.175s linear;
`

export const DeathPlayer = styled.div`
position: absolute;
width: 60px;
height: 60px;
background-image: url(${(props: PlayerPropsType) => props.gazeDirection === 'right' ? playerRight : playerLeft});
animation: ${death} 1s infinite linear;
`

export const FinishingPlayer = styled.div`
position: absolute;
width: 60px;
height: 60px;
background-image: url(${(props: PlayerPropsType) => props.gazeDirection === 'right' ? playerRight : playerLeft});
animation: ${finish} 1s forwards linear;
`

const wallerMoving = (animCoords: AnimCoords) => keyframes`
  0% {
    transform: translate(${animCoords.x}%, ${animCoords.y}%);
  }
  100% {
   transform: translate(0, 0);
  }
`

export const Waller = styled.div`
position: absolute;
width: 60px;
height: 60px;
background-image: url(${waller});
animation: ${(props: WallerProps) => wallerMoving(props.animCoords)} 0.5s linear;
`

export const Idph = styled.p`
position: absolute;
color: white;
opacity: 0.4;
`

export const Electricity = styled.div`
position: absolute;
right: -5px;
bottom: -5px;
width: 70px;
height: 70px;
background-image: url(${electricity});
`