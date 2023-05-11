import { useDispatch } from "react-redux"
import { getNewWallers } from "../utils/getNewWallers"
import { WallerType } from "../types/Waller"
import { setWallers } from "../actionCreators/waller/setWallers"
import { getWallerZones } from "../utils/getWallerZones"
import { setWallerChunkIds } from "../actionCreators/waller/setWallerCunkIds"
import { getAllWallerIds } from "../utils/getAllWallerIds"
import { getCurrentWallerIds } from "../utils/getCurrentWallerIds"
import { setLastTimerId } from "../actionCreators/waller/setLastTimerId"


export const useWallerMovement = () => {

    const dispatch = useDispatch()

    const makeWallerMovement = (wallers: WallerType[]) => {
        const newWallers = getNewWallers(wallers)
        const wallerZones = getWallerZones(newWallers)

        const allWallerIds = getAllWallerIds(wallerZones)
        const currentWallerIds = getCurrentWallerIds(wallerZones)

        let timerId

        timerId = setTimeout(() => {
            dispatch(setWallerChunkIds(currentWallerIds))
        }, 250);
        dispatch(setLastTimerId(timerId))

        timerId = setTimeout(() => {
            dispatch(setWallers(newWallers))
            dispatch(setWallerChunkIds(allWallerIds))
        }, 500);
            
        dispatch(setLastTimerId(timerId))
    }

    return makeWallerMovement
}