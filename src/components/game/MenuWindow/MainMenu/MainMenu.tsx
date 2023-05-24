import { useDispatch, useSelector } from "react-redux"
import { Logo } from "./Logo/Logo"
import { Bomb, Div, InfoButton, P, StartButton, VolumeInput } from "./MainMenu-styles"
import { setMusicVolume } from "../../../../actionCreators/sounds/setMusicVolume"
import { setEffectsVolume } from "../../../../actionCreators/sounds/setEffectsVolume"
import { RootState } from "../../../../store/store"
import { setIsLevelsWindow } from "../../../../actionCreators/windows/setIsLevelsWindow"
import { setIsInfoWindow } from "../../../../actionCreators/windows/setIsInfoWindow"


export const MainMenu = () => {

    const dispatch = useDispatch()

    const { musicVolume, effectsVolume } = useSelector((state: RootState) => state.sounds);

    const onPlayButtonClick = () => {
        dispatch(setIsLevelsWindow(true))
    }
    const onInfoButtonClick = () => {
        dispatch(setIsInfoWindow(true))
    }
    const onMusicVolumeChange = (e: any) => {
        dispatch(setMusicVolume(e.target.value))
    }
    const onEffectsVolumeChange = (e: any) => {
        dispatch(setEffectsVolume(e.target.value))
    }

    return (
        <Div>
            <Bomb/>
            <Logo />
            <StartButton onClick={onPlayButtonClick}>играть</StartButton>
            <InfoButton onClick={onInfoButtonClick}>об игре</InfoButton>

            <P>громкость музыки</P>
            <VolumeInput onChange={onMusicVolumeChange} type="range" min="0" max="100" value={musicVolume} ></VolumeInput>
            <P>громкость эффектов</P>
            <VolumeInput onChange={onEffectsVolumeChange} type="range" min="0" max="100" value={effectsVolume} ></VolumeInput>
        </Div>
    )
}