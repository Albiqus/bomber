import React, { useEffect, useState } from "react"
import sound from '../../../sounds/music/loss.mp3'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Hint, Div, MenuButton, Player, StartButton, Title } from "./LossWindow-styles";
import { useRenderLocation } from "../../../hooks/useRenderLocation";
import { setIsLossWindow } from "../../../actionCreators/windows/setIsLossWindow";
import { setIsGameWindow } from "../../../actionCreators/windows/setIsGameWindow";
import { setIsMenuWindow } from "../../../actionCreators/windows/setIsMenuWindow";
import { useResetParams } from "../../../hooks/useResetParams";
import { HINTS } from "../../../data/hints";
import { getRandomNumber } from "../../../utils/getRandomNumber";


export const LossWindow = () => {

    const dispatch = useDispatch()
    const { musicVolume } = useSelector((state: RootState) => state.sounds);
    const { currentLevel } = useSelector((state: RootState) => state.location);

    const [randomNumber, setRandomNumber] = useState(getRandomNumber(1, 2))

    const renderLocation = useRenderLocation()
    const resetParams = useResetParams()

    const audio = React.useRef<HTMLAudioElement>(null)
    useEffect(() => {
        if (audio.current) {
            audio.current.volume = musicVolume / 100
        }
    }, [musicVolume])

    const onStartButtonClick = () => {
        resetParams()
        renderLocation(currentLevel)
        dispatch(setIsLossWindow(false))
        dispatch(setIsGameWindow(true))
    }

    const onMenuButtonClick = () => {
        dispatch(setIsLossWindow(false))
        dispatch(setIsMenuWindow(true))
    }
    
    const onWindowKeyDown = (e: any) => {
        if (e.keyCode === 32) {
            onStartButtonClick()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onWindowKeyDown)
        return () => {
            window.removeEventListener('keydown', onWindowKeyDown)
        }
    }, [])

    return (
        <Div>
            <Title>Вы проиграли</Title>
            <StartButton onClick={onStartButtonClick}>заново</StartButton>
            <MenuButton onClick={onMenuButtonClick}>меню</MenuButton>
            <Hint>{HINTS[randomNumber]}</Hint>
            <Player></Player>
            <audio src={sound} ref={audio} autoPlay loop muted={false} hidden></audio>
        </Div>
    )
}