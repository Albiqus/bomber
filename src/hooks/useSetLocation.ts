import { useDispatch } from "react-redux"
import { renderChunks } from "../utils/renderChunks"
import { setLocation } from "../actionCreators/location/setLocation"
import { PLAYER_POSITIONS, PORTAL_POSITIONS, WALLERS_DATA } from "../data/location"
import { setPlayerPos } from "../actionCreators/player/setPlayerPos"
import { setPortalPos } from "../actionCreators/location/setPortalPos"
import { setWallers } from "../actionCreators/waller/setWallers"
import { setWallerSound } from "../actionCreators/sounds/setWallerSound"


export const useRenderLocation = () => {
    const dispatch = useDispatch()

    const renderLocation = (level: number) => {
        const chunks = renderChunks(level)
       
        const playerPos = PLAYER_POSITIONS[level]
        const portalPos = PORTAL_POSITIONS[level]
        const wallers = WALLERS_DATA[level]?.map(el => ({
            id: el.id,
            direction: 'forward',
            trajectory: el.trajectory,
            axis: el.axis,
            animCoords: {
                x: 0,
                y: 0,
            },
            prevId: 0
        }))

        if (wallers) {
            dispatch(setWallers(wallers))
            dispatch(setWallerSound(true))
        }

        dispatch(setPlayerPos(playerPos))
        dispatch(setPortalPos(portalPos))
        dispatch(setLocation(chunks))
    }

    return renderLocation
}