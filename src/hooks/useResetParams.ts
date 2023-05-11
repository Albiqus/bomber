import { useDispatch, useSelector } from "react-redux"
import { resetPLayerParams } from "../actionCreators/player/resetPlayerParams"
import { resetLocationParams } from "../actionCreators/location/resetLocationParams"
import { resetWallerParams } from "../actionCreators/waller/resetWallerParams"
import { resetSoundsParams } from "../actionCreators/sounds/resetSoundsParams"
import { RootState } from "../store/store"
import { clearTimeouts } from "../utils/clearTimeouts"


export const useResetParams = () => {

    const { lastTimerId } = useSelector((state: RootState) => state.waller)
    const dispatch = useDispatch()

    const resetParams = () => {
        clearTimeouts(lastTimerId)
        
        dispatch(resetPLayerParams())
        dispatch(resetLocationParams())
        dispatch(resetWallerParams())
        dispatch(resetSoundsParams())
    }

    return resetParams
}