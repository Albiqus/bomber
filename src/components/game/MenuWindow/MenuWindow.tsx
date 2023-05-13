import React, { useEffect } from "react"
import { Div, } from "./MenuWindow-styles"
import sound from '../../../sounds/music/menu.mp3'
import { RootState } from "../../../store/store"
import { useSelector } from "react-redux"
import { MainMenu } from "./MainMenu/MainMenu"
import { LevelsMenu } from "./LevelsMenu/LevelsMenu"


export const MenuWindow = () => {

    const { musicVolume } = useSelector((state: RootState) => state.sounds);
    const { isLevelsWindow } = useSelector((state: RootState) => state.windows);

    
    const audio = React.useRef<HTMLAudioElement>(null)
    useEffect(() => {
        if (audio.current) {
            audio.current.volume = musicVolume / 100
        }
    }, [musicVolume])


    return (
        <Div>
            {!isLevelsWindow && <MainMenu />}
            {isLevelsWindow && <LevelsMenu />}
            <audio src={sound} ref={audio} autoPlay loop muted={false} hidden></audio>
        </Div>
    )
}