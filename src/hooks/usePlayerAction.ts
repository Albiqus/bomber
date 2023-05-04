import { useDispatch } from "react-redux"
import { moveToLeft } from "../actionCreators/player/moveToLeft"
import { moveToUp } from "../actionCreators/player/moveToUp"
import { moveToRight } from "../actionCreators/player/moveToRight"
import { moveToDown } from "../actionCreators/player/moveToDown"
import { throwBomb } from "../actionCreators/player/throwBomb"


export const usePlayerInteraction = () => {
    const dispatch = useDispatch()

    const makePlayerInteraction = (interactionType: string) => {
        
        switch (interactionType) {
            case 'up':
                dispatch(moveToUp())
                break
            case 'right':
                dispatch(moveToRight())
                break
            case 'down':
                dispatch(moveToDown())
                break
            case 'left':
                dispatch(moveToLeft())
                break
            case 'bomb':
                dispatch(throwBomb())
                break
        }

    }
    return makePlayerInteraction
}