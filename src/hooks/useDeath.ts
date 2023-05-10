import { useDispatch } from "react-redux"
import { setIsDeath } from "../actionCreators/player/setIsDeath"
import { setPlayerDeathSound } from "../actionCreators/sounds/setDeathSound"
import { setIsLossWindow } from "../actionCreators/windows/setIsLossWindow"
import { setIsGameWindow } from "../actionCreators/windows/setIsGameWindow"
import { useResetParams } from "./useResetParams"


export const useDeath = () => {
    const dispatch = useDispatch()
    const resetParams = useResetParams()

    const makeDeath = () => {
        dispatch(setIsDeath(true))
        dispatch(setPlayerDeathSound(true))
        
        setTimeout(() => {
            dispatch(setIsGameWindow(false))
            dispatch(setIsLossWindow(true))

            resetParams()
        }, 2000);

    }

    return makeDeath
}