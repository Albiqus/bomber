import { useDispatch, useSelector } from "react-redux"
import { moveToLeft } from "../actionCreators/player/moveToLeft"
import { moveToUp } from "../actionCreators/player/moveToUp"
import { moveToRight } from "../actionCreators/player/moveToRight"
import { moveToDown } from "../actionCreators/player/moveToDown"
import { throwBomb } from "../actionCreators/location/throwBomb"
import { RootState } from "../store/store"


export const usePlayerInteraction = () => {
    const dispatch = useDispatch()
    const { playerPos } = useSelector((state: RootState) => state.player)

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
                dispatch(throwBomb(playerPos))
                break
        }

    }
    return makePlayerInteraction
}