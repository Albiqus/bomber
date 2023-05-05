import React, { useEffect } from "react";
import bomb_1 from '../../../../sounds/effects/bomb-1.mp3'
import bomb_2 from '../../../../sounds/effects/bomb-2.mp3'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { setExplosionSound } from "../../../../actionCreators/sounds/setExplosionSound";


export const EffectSounds = () => {
    
    const dispatch = useDispatch()
    const { effectsVolume, explosionSound, arsonSound } = useSelector((state: RootState) => state.sounds);

    const audio = React.useRef<HTMLAudioElement>(null)
    useEffect(() => {
        if (audio.current) {
            audio.current.volume = effectsVolume / 100
        }
    }, [effectsVolume, arsonSound])

    const onExplosionSoundEnd = () => {
        dispatch(setExplosionSound(false))
    }

    return (
        <div>
            {arsonSound && <audio src={bomb_1} ref={audio} autoPlay loop muted={false} hidden></audio>}
            {explosionSound && <audio onEnded={onExplosionSoundEnd} src={bomb_2} ref={audio} autoPlay muted={false} hidden></audio>}
        </div>
    )
}