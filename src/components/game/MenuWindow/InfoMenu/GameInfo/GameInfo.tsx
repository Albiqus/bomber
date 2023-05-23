import { Description, Div, P } from "./GameInfo-styles"


export const GameInfo = () => {
    return (
        <Div>
            <P>Об игре</P>
            <Description>Вы - Бомбер</Description>
            <Description>Ваша задача дойти до портала</Description>
            <Description>По пути будут встречаться препятствия в виде стен, барьеров и Валлеров</Description>
            <Description>Стены можно обходить, барьеры можно взрывать</Description>
            <Description>Но Валлеры бессмертны, остерегайтесь их!</Description>
        </Div>
    )
}