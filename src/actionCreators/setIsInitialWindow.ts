import { SET_IS_INITIAL_WINDOW } from "../data/actionTypes"


export const setIsInitialWindow = (status: boolean) => {
    return {
        type: SET_IS_INITIAL_WINDOW,
        payload: status
    }
}