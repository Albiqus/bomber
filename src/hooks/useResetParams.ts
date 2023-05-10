import { useDispatch } from "react-redux"
import { resetPLayerParams } from "../actionCreators/player/resetPlayerParams"
import { resetLocationParams } from "../actionCreators/location/resetLocationParams"
import { resetWallerParams } from "../actionCreators/waller/resetWallerParams"
import { resetSoundsParams } from "../actionCreators/sounds/resetSoundsParams"


export const useResetParams = () => {

    const dispatch = useDispatch()

    const resetParams = () => {
        dispatch(resetPLayerParams())
        dispatch(resetLocationParams())
        dispatch(resetWallerParams())
        dispatch(resetSoundsParams())
    }

    return resetParams
}