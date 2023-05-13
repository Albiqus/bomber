import { SET_IS_LEVELS_WINDOW } from "../../data/actionTypes"


export const setIsLevelsWindow = (status: boolean) => {
    return {
        type: SET_IS_LEVELS_WINDOW,
        payload: status
    }
}