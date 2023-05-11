import React, { useEffect } from "react"
import sound from '../../../sounds/music/loss.mp3'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Div, MenuButton, Player, StartButton, Title } from "./LossWindow-styles";
import { useRenderLocation } from "../../../hooks/useSetLocation";
import { setIsLossWindow } from "../../../actionCreators/windows/setIsLossWindow";
import { setIsGameWindow } from "../../../actionCreators/windows/setIsGameWindow";
import { setIsMenuWindow } from "../../../actionCreators/windows/setIsMenuWindow";
import { useResetParams } from "../../../hooks/useResetParams";


export const LossWindow = () => {

    const dispatch = useDispatch()
    const { musicVolume } = useSelector((state: RootState) => state.sounds);
    const { currentLevel } = useSelector((state: RootState) => state.location);

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

    const { wallers, wallerChunkIds } = useSelector((state: RootState) => state.waller)
   
    return (
        <Div>
            <Title>Вы проиграли</Title>
            <StartButton onClick={onStartButtonClick}>заново</StartButton>
            <MenuButton onClick={onMenuButtonClick}>меню</MenuButton>
            <Player></Player>
            <audio src={sound} ref={audio} autoPlay loop muted={false} hidden></audio>
        </Div>
    )
}