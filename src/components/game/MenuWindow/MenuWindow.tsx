import React, { useEffect } from "react"
import { Logo } from "./Logo/Logo"
import { Div, InfoButton, P, StartButton, VolumeInput } from "./MenuWindow-styles"
import sound from '../../../music/menu.mp3'
import { RootState } from "../../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { setMusicVolume } from "../../../actionCreators/sounds/setMusicVolume"
import { setEffectsVolume } from "../../../actionCreators/sounds/setEffectsVolume"
import { setIsMenuWindow } from "../../../actionCreators/windows/setIsMenuWindow"
import { setIsGameWindow } from "../../../actionCreators/windows/setIsGameWindow"


export const MenuWindow = () => {

    const dispatch = useDispatch()
    const { musicVolume, effectsVolume } = useSelector((state: RootState) => state.sounds);


    const onMusicVolumeChange = (e: any) => {
        dispatch(setMusicVolume(e.target.value))
    }
    const onEffectsVolumeChange = (e: any) => {
        dispatch(setEffectsVolume(e.target.value))
    }
    const onStartButtonClick = () => {
        dispatch(setIsMenuWindow(false))
        dispatch(setIsGameWindow(true))
    }


    const audio = React.useRef<HTMLAudioElement>(null)
    useEffect(() => {
        if (audio.current) {
            audio.current.volume = musicVolume / 100
        }
    }, [musicVolume])


    return (
        <Div>
            <Logo />
            <StartButton onClick={onStartButtonClick}>старт</StartButton>
            <InfoButton>об игре</InfoButton>

            <P>громкость музыки</P>
            <VolumeInput onChange={onMusicVolumeChange} type="range" min="0" max="100" value={musicVolume} ></VolumeInput>
            <P>громкость эффектов</P>
            <VolumeInput onChange={onEffectsVolumeChange} type="range" min="0" max="100" value={effectsVolume} ></VolumeInput>

            <audio src={sound} ref={audio} autoPlay loop muted={false} hidden></audio>
        </Div>
    )
}