import { SET_IS_GAME_WINDOW } from "../data/actionTypes"

export const setIsGameWindow = (status: boolean) => {
    return {
        type: SET_IS_GAME_WINDOW,
        payload: status
    }
}