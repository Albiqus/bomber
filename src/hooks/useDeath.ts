import { useDispatch } from "react-redux"
import { setIsDeath } from "../actionCreators/player/setIsDeath"
import { setPlayerDeathSound } from "../actionCreators/sounds/setDeathSound"
import { setIsLossWindow } from "../actionCreators/windows/setIsLossWindow"
import { setIsGameWindow } from "../actionCreators/windows/setIsGameWindow"
import { resetPLayerParams } from "../actionCreators/player/resetPlayerParams"
import { resetLocationParams } from "../actionCreators/location/resetLocationParams"


export const useDeath = () => {
    const dispatch = useDispatch()

    const makeDeath = () => {
        dispatch(setIsDeath(true))
        dispatch(setPlayerDeathSound(true))
        
        setTimeout(() => {
            dispatch(setIsGameWindow(false))
            dispatch(setIsLossWindow(true))
            dispatch(resetPLayerParams())
            dispatch(resetLocationParams())
        }, 2000);

    }

    return makeDeath
}