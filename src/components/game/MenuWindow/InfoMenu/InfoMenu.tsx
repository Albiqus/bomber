import { useDispatch } from "react-redux"
import { BackButton, Div, P } from "./InfoMenu-styles"
import { setIsInfoWindow } from "../../../../actionCreators/windows/setIsInfoWindow"
import { SettingsInfo } from "./SettingsInfo/SettingsInfo"
import { GameInfo } from "./GameInfo/GameInfo"
import { Notation } from "./Notation/Notation"
import { AditionalInfo } from "./AdditionalInfo/AdditionalInfo"


export const InfoMenu = () => {
    const dispatch = useDispatch()

    const onBackButtonClick = () => {
        dispatch(setIsInfoWindow(false))
    }

    return (
        <Div>
            <BackButton onClick={onBackButtonClick}></BackButton>
            <P>об игре</P>

            <SettingsInfo/>
            <GameInfo />
            <Notation />
            <AditionalInfo/>
        </Div>
    )
}