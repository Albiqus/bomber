import { Description, Div, Key, Keys, P, Setting } from "./SettingsInfo-styles"


export const SettingsInfo = () => {
    return (
        <Div>
                <P>Настройки</P>
                <Description>
                    <Setting>вперёд</Setting>
                    <Setting>назад</Setting>
                    <Setting>влево</Setting>
                    <Setting>вправо</Setting>
                    <Setting>бросить бомбу</Setting>
                </Description>
                <Keys>
                    <Key>W</Key>
                    <Key>S</Key>
                    <Key>A</Key>
                    <Key>D</Key>
                    <Key>space</Key>
                </Keys>  
        </Div>
    )
}