import styled from "styled-components";
import concrete from '../../../images/textures/concrete.jpg';
import barrier from '../../../images/textures/barrier.png';
import portal from '../../../images/textures/portal.gif';
import player from '../../../images/etity/player.png';


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
background-image: url(${concrete});
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

export const Idph = styled.p`
position: absolute;
`