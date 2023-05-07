import { useDispatch } from "react-redux"
import { renderChunks } from "../utils/renderChunks"
import { setLocation } from "../actionCreators/location/setLocation"
import { PLAYER_POSITIONS, PORTAL_POSITIONS } from "../data/location"
import { setPlayerPos } from "../actionCreators/player/setPlayerPos"
import { setPortalPos } from "../actionCreators/location/setPortalPos"


export const useRenderLocation = () => {
    const dispatch = useDispatch()

    const renderLocation = (level: number) => {
        const chunks = renderChunks(level)
        
        const playerPos = PLAYER_POSITIONS[level]
        const portalPos = PORTAL_POSITIONS[level]
        
        dispatch(setPlayerPos(playerPos))
        dispatch(setPortalPos(portalPos))
        dispatch(setLocation(chunks))
    }

    return renderLocation
}