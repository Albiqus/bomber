import { useDispatch } from "react-redux"
import { getNewWallers } from "../utils/getNewWallers"
import { WallerType } from "../types/Waller"
import { setWallers } from "../actionCreators/waller/setWallers"
import { getWallerZone } from "../utils/getWallerZone"
import { setWallerChunkIds } from "../actionCreators/waller/setWallerCunkIds"


export const useWallerMovement = () => {

    const dispatch = useDispatch()

    const makeWallerMovement = (wallers: WallerType[]) => {
        const newWallers = getNewWallers(wallers)
        const wallerChunkIds = getWallerZone(newWallers)
            
        setTimeout(() => {
            dispatch(setWallers(newWallers))
            dispatch(setWallerChunkIds(wallerChunkIds))
        }, 500);
    }

    return makeWallerMovement
}