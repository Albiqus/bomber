import { useDispatch } from "react-redux"
import { resetBomb } from "../actionCreators/player/resetBomb";
import { getChunksAfterExplosion } from "../utils/getChunksAfterExplosion";
import { Chunk } from "../types/Chunk";
import { setLocation } from "../actionCreators/location/setLocation";
import { setArsonSound } from "../actionCreators/sounds/setArsonSound";
import { setExplosionSound } from "../actionCreators/sounds/setExplosionSound";


export const useExplosion = () => {
    const dispatch = useDispatch()

    const makeExplosion = (chunks: Chunk[], bombPos: number) => {
        const newChunks = getChunksAfterExplosion(chunks, bombPos)
        dispatch(setArsonSound(true))

        setTimeout(() => {
            dispatch(setArsonSound(false))
            dispatch(resetBomb())
            dispatch(setLocation(newChunks))
            dispatch(setExplosionSound(true))
        }, 2000);

    }

    return makeExplosion
}