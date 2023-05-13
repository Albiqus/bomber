import { useDispatch, useSelector } from "react-redux";
import { Div, MenuButton, Player, StartButton, Title } from "./VictoryWundow-styles";
import React, { useEffect } from "react"
import { RootState } from "../../../store/store";
import sound from '../../../sounds/music/victory.mp3'
import { useRenderLocation } from "../../../hooks/useRenderLocation";
import { setIsGameWindow } from "../../../actionCreators/windows/setIsGameWindow";
import { setIsVictoryWindow } from "../../../actionCreators/windows/setIsVictoryWindow";
import { setIsMenuWindow } from "../../../actionCreators/windows/setIsMenuWindow";
import { useResetParams } from "../../../hooks/useResetParams";


export const VictoryWindow = () => {

    const dispatch = useDispatch()
    const renderLocation = useRenderLocation()

    const { musicVolume } = useSelector((state: RootState) => state.sounds);
    const { currentLevel } = useSelector((state: RootState) => state.location);
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
        dispatch(setIsVictoryWindow(false))
        dispatch(setIsGameWindow(true))
    }

    const onMenuButtonClick = () => {
        dispatch(setIsVictoryWindow(false))
        dispatch(setIsMenuWindow(true))
    }


    return (
        <Div>
            <Title>Уровень пройден</Title>
            <StartButton onClick={onStartButtonClick}>дальше</StartButton>
            <MenuButton onClick={onMenuButtonClick}>меню</MenuButton>
            <Player />
            <audio src={sound} ref={audio} autoPlay loop muted={false} hidden></audio>
        </Div>
    )
}