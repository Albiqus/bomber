import React, { useEffect } from 'react';
import { Description, Div, MenuButton, P, Player } from "./EndingWindow-styles"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import sound from '../../../sounds/music/victory.mp3'
import { setIsMenuWindow } from '../../../actionCreators/windows/setIsMenuWindow';
import { setIsEndingWindow } from '../../../actionCreators/windows/setIsEndingWindow';


export const EndingWindow = () => {

    const { musicVolume } = useSelector((state: RootState) => state.sounds);
    const dispatch = useDispatch()
    
    const audio = React.useRef<HTMLAudioElement>(null)
    useEffect(() => {
        if (audio.current) {
            audio.current.volume = musicVolume / 100
        }
    }, [musicVolume])


    const onMenuButtonClick = () => {
        dispatch(setIsEndingWindow(false))
        dispatch(setIsMenuWindow(true))
    }

    return (
        <Div>
            <P>Вы прошли игру</P>
            <Description>Очень надеемся, что Вам понравилось!</Description>
            <Player />
            <MenuButton onClick={onMenuButtonClick}>меню</MenuButton>
            <audio src={sound} ref={audio} autoPlay loop muted={false} hidden></audio>
        </Div>
    )
}