import { useDispatch } from "react-redux"
import { setIsFinish } from "../actionCreators/player/setIsFinish"
import { setPlayerFinishSound } from "../actionCreators/sounds/setPlayerFinishSound"
import { setIsGameWindow } from "../actionCreators/windows/setIsGameWindow"
import { setIsVictoryWindow } from "../actionCreators/windows/setIsVictoryWindow"
import { resetPLayerParams } from "../actionCreators/player/resetPlayerParams"
import { resetLocationParams } from "../actionCreators/location/resetLocationParams"
import { setNextLevel } from "../actionCreators/location/setNextLevel"


export const useFinishLevel = () => {
    const dispatch = useDispatch()

    const finishLevel = () => {
        dispatch(setIsFinish(true))
        dispatch(setPlayerFinishSound(true))

        setTimeout(() => {
            dispatch(setIsGameWindow(false))
            dispatch(setIsVictoryWindow(true))
            dispatch(resetPLayerParams())
            dispatch(resetLocationParams())
            dispatch(setNextLevel())
        }, 3000);
    }

    return finishLevel
}