import { useDispatch, useSelector } from "react-redux"
import { setIsFinish } from "../actionCreators/player/setIsFinish"
import { setPlayerFinishSound } from "../actionCreators/sounds/setPlayerFinishSound"
import { setIsGameWindow } from "../actionCreators/windows/setIsGameWindow"
import { setIsVictoryWindow } from "../actionCreators/windows/setIsVictoryWindow"
import { setLevel } from "../actionCreators/location/setLevel"
import { useResetParams } from "./useResetParams"
import { RootState } from "../store/store"
import { setIsEndingWindow } from "../actionCreators/windows/setIsEndingWindow"


export const useFinishLevel = () => {
    const dispatch = useDispatch()
    const resetParams = useResetParams()
    const { currentLevel } = useSelector((state: RootState) => state.location);


    const finishLevel = () => {

        const maxAvailableLevel = localStorage.getItem('maxAvailableLevel') || 1

        let nextLevel = +currentLevel + 1
        let isPassedGame = false;

        if (currentLevel === '10') {
            nextLevel = +currentLevel
            isPassedGame = true
        } 

        if (+maxAvailableLevel < nextLevel) {
            localStorage.setItem('maxAvailableLevel', String(nextLevel))
        }

        dispatch(setIsFinish(true))
        dispatch(setPlayerFinishSound(true))

        setTimeout(() => {
            dispatch(setIsGameWindow(false))
            resetParams()
            dispatch(setLevel(nextLevel))
            
            if (isPassedGame) {
                dispatch(setIsEndingWindow(true))
                return
            }
            dispatch(setIsVictoryWindow(true))
          
        }, 3000);
    }

    return finishLevel
}