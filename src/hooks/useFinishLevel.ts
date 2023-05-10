import { useDispatch } from "react-redux"
import { setIsFinish } from "../actionCreators/player/setIsFinish"
import { setPlayerFinishSound } from "../actionCreators/sounds/setPlayerFinishSound"
import { setIsGameWindow } from "../actionCreators/windows/setIsGameWindow"
import { setIsVictoryWindow } from "../actionCreators/windows/setIsVictoryWindow"
import { setNextLevel } from "../actionCreators/location/setNextLevel"
import { useResetParams } from "./useResetParams"


export const useFinishLevel = () => {
    const dispatch = useDispatch()
    const resetParams = useResetParams()

    const finishLevel = () => {
        dispatch(setIsFinish(true))
        dispatch(setPlayerFinishSound(true))

        setTimeout(() => {
            dispatch(setIsGameWindow(false))
            dispatch(setIsVictoryWindow(true))

            resetParams()

            dispatch(setNextLevel())
        }, 3000);
    }

    return finishLevel
}