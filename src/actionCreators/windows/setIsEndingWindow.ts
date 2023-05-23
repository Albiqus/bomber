import { SET_IS_ENDING_WINDOW } from "../../data/actionTypes"


export const setIsEndingWindow = (status: boolean) => {
    return {
        type: SET_IS_ENDING_WINDOW,
        payload: status
    }
}


