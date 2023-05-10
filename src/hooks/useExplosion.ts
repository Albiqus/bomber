import { useDispatch } from "react-redux"
import { resetBomb } from "../actionCreators/location/resetBomb";
import { getChunksAfterExplosion } from "../utils/getChunksAfterExplosion";
import { Chunk } from "../types/Chunk";
import { setLocation } from "../actionCreators/location/setLocation";
import { setArsonSound } from "../actionCreators/sounds/setArsonSound";
import { setExplosionSound } from "../actionCreators/sounds/setExplosionSound";
import { getDestroyedChunkIds } from "../utils/getDestroyedChunkIds";
import { setExplodedChunkIds } from "../actionCreators/location/setExplodedChunkIds";


export const useExplosion = () => {
    const dispatch = useDispatch()

    const makeExplosion = (currentChunks: Chunk[], bombPos: number) => {
        dispatch(setArsonSound(true))

        const destroyedChunkIds = getDestroyedChunkIds(bombPos)
        
        const newChunks = getChunksAfterExplosion(currentChunks, destroyedChunkIds)
        
        setTimeout(() => {
            dispatch(setExplodedChunkIds(destroyedChunkIds))
            dispatch(setArsonSound(false))
            dispatch(resetBomb())
            dispatch(setLocation(newChunks))
            dispatch(setExplosionSound(true))
        }, 2000);

    }

    return makeExplosion
}