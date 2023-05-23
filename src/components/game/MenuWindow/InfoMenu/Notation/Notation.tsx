import { Description, Div, Electricity, Image, Images, Name, P, Waller } from "./Notation-styles"
import bomber from '../../../../../images/entity/player-right.png'
import bomb from '../../../../../images/entity/bomb.png'
import portal from '../../../../../images/textures/portal.gif'
import waller from '../../../../../images/entity/waller.png'
import wall from '../../../../../images/textures/wall.png'
import barrier from '../../../../../images/textures/barrier.png'

export const Notation = () => {

    return (
        <Div>
            <P>Обозначения</P>
            <Description>
                <Name>Бомбер</Name>
                <Name>Бомба</Name>
                <Name>Портал</Name>
                <Name>Валлер</Name>
                <Name>Стена</Name>
                <Name>Барьер</Name>
            </Description>

            <Images>
                <Image src={bomber}></Image>
                <Image src={bomb}></Image>
                <Image src={portal}></Image>
                <Image src={waller}></Image>
                <Waller><Electricity /></Waller>
                <Image src={wall}></Image>
                <Image src={barrier}></Image>
            </Images>
        </Div>
    )
}